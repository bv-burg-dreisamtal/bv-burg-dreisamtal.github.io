if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),a={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>a[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"burger-adventkalender"}),self.skipWaiting(),e.precacheAndRoute([{url:"css/286.a8e87e45.css",revision:null},{url:"css/chunk-vendors.4bf1309c.css",revision:null},{url:"css/index.0eaebe75.css",revision:null},{url:"data.json",revision:"e6f7c99257438aa40249d229350a5524"},{url:"fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"img/advent-season-chocolate-pastries_640.jpg",revision:"ebbe0b50f8557c061379873ace47b0d8"},{url:"img/advent-season-dürer-bread_640.jpg",revision:"58c5af39794236f78315ddb92644c9a5"},{url:"img/christ-stollen-christmas-stollen_640.jpg",revision:"427f05203f9da4175f3c861959685609"},{url:"img/christmas-lights-street-town_640.jpg",revision:"44d5417d519cfb57d99ec8dd7780a5f8"},{url:"img/christmas-motif-half-timbered-houses_640.jpg",revision:"995b190076569bf97f5aca5b6a34eb8d"},{url:"img/cookies-walnuts-cinnamon-sticks_640.jpg",revision:"ef9c3507e561a14aa4bc0ca66a5d10b7"},{url:"img/forest-hills-snow-panorama-trees_640.jpg",revision:"c8c9ea08c20e8bc4449a4c0889c7b80d"},{url:"img/lucia-christmas_640.jpg",revision:"c389138d4639a01009b76e12dd01868b"},{url:"img/octagon.944c84cf.png",revision:null},{url:"img/snowman-snow-christmas-winter-cold_640.jpg",revision:"30942f4e108f43717ac2da1a28a23bad"},{url:"img/stars-lanterns-lighting_640.jpg",revision:"86b038c23a86fa0a5f56b7f302b6d1de"},{url:"img/winter-landscape-black-forest-tree_640.jpg",revision:"5bcddb7fa0c8ddd0ed458cec1d3dc549"},{url:"img/winter-landscape-trees-frost-snow_640.jpg",revision:"121430235c3c0e19c983aa230dc8b8c1"},{url:"index.html",revision:"d171bb2b94e08e8760ca487688605766"},{url:"js/286.410dc425.js",revision:null},{url:"js/556.0d67016f.js",revision:null},{url:"js/chunk-vendors.48c09196.js",revision:null},{url:"js/index.a8f5fa64.js",revision:null},{url:"js/webfontloader.bae1111d.js",revision:null},{url:"manifest.json",revision:"7244b53f70023f8aab91f5ad11e566d2"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));