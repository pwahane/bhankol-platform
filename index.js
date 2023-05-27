const dhive = require('@hiveio/dhive');
const { Kafka } = require('kafkajs');

const client = new dhive.Client('https://api.hive.blog');

const kafka = new Kafka({
    clientId: 'bhankol',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

async function connect() {
    await producer.connect();
}

connect();

async function sendMessage(topic, message) {
    try {
        await producer.send({
            topic,
            messages: [
                { value: message }
            ]
        });
        console.log('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

const topic = 'Blocks';

client.blockchain.getCurrentBlockNum().then((result) => {
    console.log(result);
});

client.blockchain.getBlockStream({ from: 1, to: 100 }).addListener('data', function (block) {
    console.log(block.block_id);
    sendMessage(topic, JSON.stringify(block));
});

async function disconnect() {
    await producer.disconnect();
}

disconnect();
