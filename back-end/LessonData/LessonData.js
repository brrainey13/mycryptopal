const fs = require('fs');
const path = require('path');

const lessons = [
  {title:
        [
          {titleNum: 1, titleText: 'Lesson 1: What is the difference between the crypto market and the stock market? '},
          {titleNum: 2, titleText: 'Lesson 2: What is a blockchain? '},
          {titleNum: 3, titleText: 'Lesson 3: What is cryptocurrency? '},
          {titleNum: 4, titleText: 'Lesson 4: What is a cryptocurrency exchange?'},
          {titleNum: 5, titleText: 'Lesson 5: Storage methods'},
          {titleNum: 6, titleText: 'Lesson 6: What is a whitepaper?'},
          {titleNum: 7, titleText: 'Lesson 7: Investing methods (Day trading, HODL, etc)'},
          {titleNum: 8, titleText: 'Lesson 8: Bear and Bull Markets and FUD'},
          {titleNum: 9, titleText: 'Lesson 9: What is a smart contract?'},
          {titleNum: 10, titleText: 'Lesson 10: Different Types of Cryptocurrency'},
          {titleNum: 11, titleText: 'Lessons Overview'},
        ],
  },
  {content:
        [
          {content: 1, contentText: 'A basic concept to note about the difference between the crypto market and stock market is that owning stock means ownership of a piece of a company. In a public offering for example, selling shares allows a company to raise more money. In some cases, even after a company is publicly traded, it may issue more stocks to raise money, but this dilutes the value of current shares. \n On the other hand, cryptocurrencies are not backed by underlying assets or earnings. There are thousands of cryptocurrencies to choose from, and each of them are decentralized.This creates volatility as they are not regulated. In some cases, countries such as China have banned crypto in hopes of keeping a regulated finance system. \n Both are valid forms of investment that serve different purposes. In the following lessons, you will learn the fundamentals of crypto and how you can invest in your first cryptocurrency!'},
          {content: 2, contentText: 'A blockchain is a distributed database that is shared among a computer network. This decentralized database is known as Distributed Ledger Technology (DLT). Essentially, a blockchain records information that makes it very hard for someone to change, hack, or steal. \n A blockchain collects information in groups (called blocks), where each block has a certain  storage capacity. Different types of information can be stored on a blockchain, but the most common use is a ledger for transactions. Each transaction is recorded with a cryptographic signature called a hash. As such, if one block is changed (a transaction is made), it would be clear to see from the block history. \n Some important properties of Distributed Ledger Technology are: \n Programmable (smart contracts - will be covered in a later lesson) \n Secure (all records are encrypted) \n Anonymous \n Unanimous (all participants in a certain network approve each of the records) \n Time-stamped (recorded on a block) \n Immutable \n Distributed (all participants have a record of the ledger) '},
          {content: 3, contentText: 'A cryptocurrency is a digital or virtual currency that is not backed by institutions and secured by cryptography. It is a form of digital asset based on a network that is distributed across a large number of computers. Specifically, cryptocurrencies run on a distributed public ledger (blockchain) that records all transactions for participants of a network to view. This means it is extremely hard to counterfeit or double-spend. Some benefits of a system like this are cheaper and faster money transfers and decentralization. \n To note: Owning a cryptocurrency does not mean owning the coin. As an owner of cryptocurrency, you do not own anything tangible. Instead, you own a key that allows you to move a record from one person to another without having to go through an institution such as a bank.'},
          {content: 4, contentText: 'A cryptocurrency exchange is a digital marketplace where you can buy and trade crypto. You cannot buy crypto from a bank or investing firm. Thus, once you decide on a cryptocurrency you would like to buy, you must create an account on a cryptocurrency exchange where you will exchange U.S. dollars for digital assets. On crypto exchanges, in addition to buying and selling, you have the option to convert one cryptocurrency for another. For example, if you have bitcoin and would like to convert a portion of your bitcoin to ethereum, this can be done on the exchange. \n Some popular exchanges are Coinbase, Robinhood, and Binance. In order to choose the best crypto exchange, here are some things to keep note of: fees and minimum.'},
          {content: 5, contentText: 'There are two ways to store a cryptocurrency: hot and cold wallets. A hot wallet is connected to the internet and allows for faster transactions. However, they can be more vulnerable to hacks. A cold wallet on the other hand is not connected to the internet which minimizes the risks of a hack but causes inconvenience. Many people prefer hot wallets over cold wallets because of its convenience. For example, if you would like to transfer crypto to a friend and you use a hot wallet, you could transfer it online. However, if you use a cold wallet, you would need a device to plug in your USB and then transfer. That said, in terms of convenience, a hot wallet is the best option. But in terms of security, a cold wallet is favored. \n Some examples of hot wallets are Coinbase, Metamask, and Binance. An example of a cold wallet is a USB. \n To note: People who hold large amounts of crypto tend to use cold wallets to prevent scams and hacks. '},
          {content: 6, contentText: 'A whitepaper is an informational document issued to highlight features of a product or service. Specifically in crypto, the whitepaper is released by developers that explains what technology they are using and the purpose of the project. \n What is included in a whitepaper? \n A crypto whitepaper contains a ton of data including statistics, diagrams, and formulas.'},
          {content: 7, contentText: 'There are different investing methods when it comes to cryptocurrency. The two most popular methods we will discuss in this lesson are HODL and day trading. You may notice that hodl is not a word, but is similar to the word “hold”. That is exactly what this method entails. When you hodl, you buy crypto, store it in your wallet, and hold. As a holder, you hold through market lows and you don’t sell until the market recovers and is high enough for profit. \n The other method is day trading. If you are familiar with the stock market, you should know that day trading is the exact opposite of HODL. Positions are taken on the short term rather than the long term, and big profits can be seen within minutes of purchasing. Day trading becomes tricky for amateur investors as it requires constant attention to the volatility of the market, especially within cryptocurrency. Some concepts you should be familiar with before day trading are: FUD, and bear and bull markets.These concepts will be covered in the next lesson. '},
          {content: 8, contentText: 'If you have experience in the stock market, you may already understand these terms. \n A bull market is a period of time where most investors are buying and prices are rising. Typically, when many people are buying and prices are rising rapidly, this is a sign of a bull market where people are “bullish” about the future of something. Since cryptocurrency is so volatile and very much influenced by public confidence, being able to analyze the market and spot bullish coins is a key to success. \n A bear market is a period of time where confidence is low and prices are dropping. In cases where you miss a time to buy into something, a bear market may present a chance for you to buy. Especially if your investment strategy is focused on the long term, many people take advantage of bear markets to enter. \n FUD stands for “fear, uncertainty, and doubt”. In many cases, people spread FUD to trick people and spread negativity about a coin and its future. The reason for this can be that they missed out on a good price to enter, or that they are simply jealous and have bad intentions. '},
          {content: 9, contentText: 'Smart contracts are programs that are stored on a blockchain and only run when conditions are met. They are fully automated and hence reduce the time per transaction and need for an intermediary, such as a bank. In essence, a smart contract works by following “if then” statements coded on a blockchain. \n Some benefits of smart contracts include speed and efficiency, transparency, and security. Given the contract is fully automated, there is no paperwork processing time and little to no errors. Since smart contracts are coded on a blockchain, you should remember from our previous lessons that this means everyone can see the transaction history, making smart contracts very trustworthy and transparent. Lastly, the blockchain itself is encrypted, making it very hard for people to hack. Something unique about smart contracts is that they are all connected to the previous record on a ledger. As such, someone would need to change the entire chain to hack just one record.'},
          {content: 10, contentText: 'The two different types of cryptocurrency are coins and tokens. A token is a cryptocurrency that is built on another blockchain, whereas a coin is a cryptocurrency that has its own blockchain (like Bitcoin or Ethereum). \n In most cases, buying a cryptocurrency will mean buying a coin. However, tokens are important as well. Tokens is similar to that of an initial public offering in the stock market. That is, tokens are usually sold in the first public sale for a project (initial coin offering). The two popular types of tokens are utility and security. A utility token is used only to buy products or services from the company that issues them. A security token acts as a share of the value of an enterprise. Meaning these tokens pay dividends, share profits, interest, or in some cases invest in other tokens to then generate profit for these token holders. '},
          {content: 11, contentText: 'Test your comprehensive knowledge!'},

        ],
  },
  {questions:
        [
          {questionNumber: 1, questionText: 'What does non-regulated cryptocurriencies create?', answer: 'Volatility'},
          {questionNumber: 2, questionText: 'True or False: Cryptocurrencies are backed by underlying assets or earnings.', answer: 'False'},
          {questionNumber: 3, questionText: 'Fill in the blank: Owning _____ means ownership of a piece of a company', answer: 'Stock'},
          {questionNumber: 4, questionText: 'Fill in the blank: A blockchain is a ___________ database that is shared among a computer network', answer: 'Distributed'},
          {questionNumber: 5, questionText: 'What is the most common use of storage on a blockchain?', answer: 'Ledger'},
          {questionNumber: 6, questionText: 'What cyptographic signature is used to store transactions?', answer: 'Hash'},
          {questionNumber: 7, questionText: 'True or False: A cryptocurrency is a digital or virtual currency that is not backed by institutions and secured by cryptography ', answer: 'True'},
          {questionNumber: 8, questionText: 'True or False: Cryptocurrency is easy to counterfeit or double-spend.', answer: 'False'},
          {questionNumber: 9, questionText: 'Fill in the blank: Some benefits of a system like this are cheaper and faster money transfers and ____________________', answer: 'Decentralization'},
          {questionNumber: 10, questionText: 'What is the digital marketplace where you can buy and trade crypto called?', answer: 'Cryptocurrency Exchange'},
          {questionNumber: 11, questionText: 'True or False: You can buy crypto from a bank or investing firm.', answer: 'False'},
          {questionNumber: 12, questionText: 'True or False: You can convert one form of cryptocurrency to another.', answer: 'True'},
          {questionNumber: 13, questionText: 'Fill in the blank: There are two ways to store a cryptocurrency: ____  ____  ____ wallets', answer: 'Hot and Cold'},
          {questionNumber: 14, questionText: 'True or False: A hot wallet is more vulnerable to hacks.', answer: 'True'},
          {questionNumber: 15, questionText: 'In terms of convenience which wallet is preferred, hot or cold?', answer: 'Hot'},
          {questionNumber: 16, questionText: 'Fill in the blank: A _________ is an informational document issued to highlight features of a product or service', answer: 'Whitepaper'},
          {questionNumber: 17, questionText: 'Fill in the blank: the whitepaper is released by developers that explains what technology they are using and the ______ of the project', answer: 'Purpose'},
          {questionNumber: 18, questionText: 'Fill in the blank: A crypto whitepaper contains a ton of data including statistics, _______, and formulas', answer: 'diagrams'},
          {questionNumber: 19, questionText: 'What method is called when you buy crypto and store it in your wallet?', answer: 'hodl'},
          {questionNumber: 20, questionText: 'True or False: Day trading is the exact opposite of HODL', answer: 'True'},
          {questionNumber: 21, questionText: 'True or False: Day trading becomes tricky for amateur investors as it requires constant attention to the volatility of the market, especially within cryptocurrency', answer: 'True'},
          {questionNumber: 22, questionText: 'Fill in the blank: A ____ ______ is a period of time where most investors are buying and prices are rising', answer: 'Bull Market'},
          {questionNumber: 23, questionText: 'Fill in the blank: A ____ ______ is a period of time where confidence is low and prices are dropping', answer: 'Bear Market'},
          {questionNumber: 24, questionText: 'True or False:  In many cases, people spread FUD to trick people and spread negativity about a coin and its future.', answer: 'True'},
          {questionNumber: 25, questionText: 'What are programs that are stored on a blockchain and only run when conditions are met called', answer: 'Smart Contracts'},
          {questionNumber: 26, questionText: 'True or False: Everyone can see the transaction history of smart contracts.', answer: 'True'},
          {questionNumber: 27, questionText: 'Fill in the blank: Smart contracts is that they are all connected to the _______ record on a ledger.', answer: 'Previous'},
          {questionNumber: 28, questionText: 'What are the two types of cryptocurrency?', answer: 'Coins and Tokens'},
          {questionNumber: 29, questionText: 'True or False: Tokens are usually sold in the first public sale for a project.', answer: 'True'},
          {questionNumber: 30, questionText: 'Fill in the blank:A _______ token is used only to buy products or services from the company that issues them', answer: 'Utility'},
          {questionNumber: 31, questionText: 'Fill in the blank: Because the volatility is not _______, countries such as China have banned crypto in hopes of keeping a _________ finance system', answer: 'Regulated'},
          {questionNumber: 32, questionText: 'True or False: The blockchain is encrypted and is very easy for people to hack', answer: 'False'},
          {questionNumber: 33, questionText: 'Specifically in crypto, who releases the whitepaper that explains what technology they are using and the purpose of the project.', answer: 'Developers'},
          {questionNumber: 34, questionText: 'True or False: Especially if your investment strategy is focused on the long term, many people advise against using bear markets to enter.', answer: 'False'},
          {questionNumber: 35, questionText: 'True or False: Given that smart contracts is fully automated, there is no paperwork processing time and little to no errors.', answer: 'True'},
        ],
  },
];

const reformattedLessons = lessons[0].title.reduce((resultObject, element, index) => {
  const lesson = {};
  lesson.id = element.titleNum;
  lesson.title = element.titleText;
  lesson.content = lessons[1].content[index].contentText;
  const lessonQuestions = [];
  const questionStartIndex = 3 * (index + 1) - 2;
  let questionEndIndex;
  if (index !== 10) {
    questionEndIndex = (index + 1) * 3;
  } else {
    questionEndIndex = 35;
  }
  for (let i = questionStartIndex - 1; i < questionEndIndex; i++) {
    lessonQuestions.push(lessons[2].questions[i]);
  }
  lesson.questions = lessonQuestions;
  resultObject[lesson.id] = lesson;
  return resultObject;
}, {});

const jsonString = JSON.stringify(reformattedLessons, null, 2);

fs.writeFile(path.join(__dirname, 'lessons.json'), jsonString, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
