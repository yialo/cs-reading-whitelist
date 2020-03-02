'use strict';

const postcss = require('postcss');
const getDataList = require('./get-data-list.js');
const getLoopStructure = require('./get-loop-structure.js');
const validateLoopVars = require('./validate-loop-vars.js');

module.exports = postcss.plugin('postcss-each', () => {
  return (root) => {
    root.cleanRaws();
    root.walkAtRules('each', (atRule) => {
      const [loopVarsRef, dataStructureRef] = atRule.params.split(/ +in +/);

      let loopDataList;
      if (dataStructureRef.startsWith('$')) {
        root.walkDecls((dataStructureRef), (decl) => {
          loopDataList = getDataList(decl.value);
          decl.remove();
        });
      } else {
        loopDataList = getDataList(dataStructureRef);
      }
      const loopStructure = getLoopStructure(loopDataList);

      const loopVars = postcss.list.comma(loopVarsRef);
      validateLoopVars(loopVars, loopStructure.type);

      const ruleList = [];
      loopStructure.entryList.forEach((entry, i) => {
        const innerRuleList = [];
        const entryNumber = i + 1;

        atRule.each((node) => {
          const clonedNode = node.clone();
          loopVars.forEach((loopVar, j) => {
            const escapedVar = `\\${loopVar}`;
            const replacer = (() => {
              if (loopStructure.type === 'dict') {
                return (j <= 1 ? entry[j] : entryNumber);
              }
              return (j === 0 ? entry : entryNumber);
            })();

            const selectorMatcher = new RegExp(`\\(${escapedVar}\\)`, 'g');
            clonedNode.selector = clonedNode.selector.replace(selectorMatcher, replacer);

            clonedNode.walkDecls((decl) => {
              const interpolationMatcher = new RegExp(`#{${escapedVar}}`, 'g');
              const simpleMatcher = new RegExp(`(?<=(^| +))${escapedVar}(?=( +|$))`, 'g');
              decl.value = decl.value
                .replace(interpolationMatcher, replacer)
                .replace(simpleMatcher, replacer);
            });
          });
          innerRuleList.push(clonedNode);
        });
        ruleList.push(...innerRuleList);
      });

      atRule.replaceWith(ruleList);
    });
  };
});
