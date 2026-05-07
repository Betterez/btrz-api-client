const {MockAgent, setGlobalDispatcher, fetch} = require("undici");
const agent = new MockAgent();
agent.disableNetConnect();
setGlobalDispatcher(agent);


async function runFetchTest() {
  agent.get("https://example.com").intercept({path: "/data"}).reply(200, {success: true});
  const response = await fetch("https://example.com/data");
  const data = await response.json();
  agent.assertNoPendingInterceptors();
  console.log(data);
}

runFetchTest();
