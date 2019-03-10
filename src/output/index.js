const figlet = require('figlet')
const clui = require('clui')

const Line = clui.Line
const chalk = require('chalk');
 
const boxen = require('boxen'); 

module.exports = class Outputer {
  output (data) {
    if (!data) return
    let { total } = data
    let {
      dnsTime,
      tcpTime,
      TTFB,
      pageDownloadTime,
      whiteScreenTime,
      DOMReadyTime,
      afterDOMReadyDownloadTime,
      loadTime
    } = total;
    
    console.log(chalk.blue(figlet.textSync('               Omiga')));
    
    //console.log(boxen('Omiga 网页性能Performance测试 ', {padding: 1}));
    
    console.log(chalk.yellow("================================================================"));
    console.log(chalk.red.bold("                 Omiga 网页性能Performance测试                                  "));
    console.log(chalk.yellow("================================================================"));
    console.log('\n')
    console.log(`加载 ${global.__hiper__.url} ${global.__hiper__.count} 次 用时 ${(global.__hiper__.runInterval) / 1000} s`)
    console.log('\n')
    new Line()
        .padding(5)
        .column(chalk.red('[performance]:'), 36, [chalk.magenta.bold])
        .column(chalk.red('[time]:'), 20, [chalk.magenta.bold])
        .fill()
        .output();
    new Line()
      .padding(5)
      .column(chalk.green('DNS lookup time'), 36,[chalk.magenta.bold])
      .column(dnsTime, 20, [chalk.green.bold])
      .fill()
      .output()
    new Line()
      .padding(5)
      .column(chalk.green('TCP connect time'), 36,[chalk.magenta.bold])
      .column(tcpTime, 20, [chalk.green.bold])
      .fill()
      .output()
    new Line()
      .padding(5)
      .column(chalk.green('TTFB'), 36,[chalk.magenta.bold])
      .column(TTFB, 20, [chalk.green.bold])
      .fill()
      .output()
    new Line()
      .padding(5)
      .column(chalk.green('Download time of the page'), 36,[chalk.magenta.bold])
      .column(pageDownloadTime, 20, [chalk.green.bold])
      .fill()
      .output()
    new Line()
      .padding(5)
      .column(chalk.green('After DOM Ready download time'), 36,[chalk.magenta.bold])
      .column(afterDOMReadyDownloadTime, 20, [chalk.green.bold])
      .fill()
      .output()
    new Line()
      .padding(5)
      .column(chalk.green('White screen time'), 36,[chalk.magenta.bold])
      .column(whiteScreenTime, 20, [chalk.green.bold])
      .fill()
      .output()
    new Line()
      .padding(5)
      .column(chalk.green('DOM Ready time'), 36,[chalk.magenta.bold])
      .column(DOMReadyTime, 20, [chalk.green.bold])
      .fill()
      .output()
    new Line()
      .padding(5)
      .column(chalk.green('Load time'), 36,[chalk.magenta.bold])
      .column(loadTime, 20, [chalk.green.bold])
      .fill()
      .output()
    console.log('\n')
  }
}
