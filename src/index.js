#! /usr/bin/env node --no-warnings
 // 接受cli参数
// 装配opts
// 调用broswer拿到数据
// 调用分析模块
// 调用output
/**
 * Module dependencies.
 */
// 命令行对象

const terminal = require('terminal-utilities')
const chalk = require('chalk');
const ora = require('ora');
const Cli = require('../src/cli')
const Outputer = require('../src/output')
// 性能数据生成对象
const Performance = require('../src/performance')
// 统计分析对象
const Analyzer = require('../src/analyzer')
const cli = new Cli()
const performance = new Performance()
const analyzer = new Analyzer()
const outputer = new Outputer()

// 监听命令行
let opts = cli.monitor();
const startTime = Date.now();
const spinner = ora('runing...').start();

let spendTime = 0;
var timer=setInterval(() => {
	spendTime = spendTime + 1;
	spinner.text = 'running saber in ' + spendTime + 's...';
}, 1000);

performance.run(opts).then(async statisticData => {
	spinner.succeed(`success after ${(Date.now() - startTime)/1000}s! \n`);
	clearInterval(timer);
	terminal.clear()   //清屏
	let data = await analyzer.statistics(statisticData)
	// console.log('data:', data)
	outputer.output(data)
}).catch((e)=>{
	console.log('err',e)
})

// console.log(JSON.stringify(opts))