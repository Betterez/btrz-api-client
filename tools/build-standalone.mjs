import {build} from "esbuild";

const umdBanner = `(function(root,factory){if(typeof module==="object"&&module.exports){module.exports=factory();}else if(typeof define==="function"&&define.amd){define([],factory);}else{root.BtrzApiClient=factory();}})(typeof globalThis!=="undefined"?globalThis:this,function(){`;
const umdFooter = "return BtrzApiClient;});";

await build({
  entryPoints: ["lib/client.js"],
  outfile: "lib/client-standalone-min.js",
  bundle: true,
  minify: true,
  format: "iife",
  globalName: "BtrzApiClient",
  banner: {js: umdBanner},
  footer: {js: umdFooter}
});
