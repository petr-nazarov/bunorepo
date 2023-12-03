const { startUnleash } = require('unleash-client');

const unleash = await startUnleash({
  url: process.env.UNLEASH_URL,
  appName: 'default',
  customHeaders: { Authorization: process.env.UNLEASH_TOKEN }
});

// optional error handling when using unleash directly
unleash.on('error', console.error);

if (unleash.isEnabled('app_server-log_env_on_start')) {
   console.log("Env: ", process.env.ENV_NAME);
} else { 
  console.log("Env: ", "Not enabled");
}

export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const divide = (a: number, b: number) => a / b;
export const multiply = (a: number, b: number) => a * b;
