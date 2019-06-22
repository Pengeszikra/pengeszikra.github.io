/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["app.html","374cc4e79e6b96e85e0beb2ac0ff08c0"],["document/cave.1.1.md","ba396d9e84749aeb4ddd5070a40f9b98"],["document/cave.2.1.again.md","283d6c4fc0eac486defc99a2eca3970e"],["document/cave.2.1.md","9e49f9f517f1c5b9ea07cb6c49a51479"],["document/cave.2.10.md","1dd428224a400a494a0a7783fad4df60"],["document/cave.2.11.md","66a385a135e9f0589d6dbe8474759b08"],["document/cave.2.12.md","2558ab24b00c403850467b743a8531a5"],["document/cave.2.2.md","105ce41084ac02be3d379b5a24c368ce"],["document/cave.2.3.md","7654fd02e26f2ea440c875640eb25e95"],["document/cave.2.4.md","538127c261a32f05c51d0ab15d0353c8"],["document/cave.2.5.md","d49e18fa13497f053cc2a99bd251cb43"],["document/cave.2.6.md","21d46c81ccb6e1e8945bf55edd8316f5"],["document/cave.2.7.md","056b90282a21bee91ad38016aff7e8f2"],["document/cave.2.8.md","421d3926f622b2b2daf788d8caa7c943"],["document/cave.2.9.md","5772012a61c38fc2f56af98be756dda7"],["document/cave.3.md","0f024a632f87399beaa387f13e5f9410"],["document/cave.4.md","21106e5f536634b2c3b415100d81c37f"],["document/cave.intro.md","1fa8b6b2064372497f4f72a70eb888f0"],["document/development.md","16239bb30ba7235ba28e9e78612ce445"],["document/history.md","b5d80ccbf0fb8416d4e5a55f7504f6b9"],["document/idea.md","d5f1cdfeb680a212b621c0fc454fa45b"],["document/image.list.md","3221ef67ca7f6aa8744b940d93be7726"],["document/interactive-story-development.md","65edd969e0cdebb10559afa34769c20e"],["document/intro.md","1fa8b6b2064372497f4f72a70eb888f0"],["document/levelSelector.md","5c510ea039bdf9adfd6393a10b13ac60"],["document/scenario-from-excel/idea-scenario_elemei/filelist.xml","332492c84073cf2fa6dc004e7e46b75c"],["document/scenario-from-excel/idea-scenario_elemei/image001.png","ec9548a4e0a94db32541fd7122730f73"],["document/scenario-from-excel/idea-scenario_elemei/image002.png","81da43f5b6c9a35fbfe940f428a8fa2c"],["document/scenario-from-excel/idea-scenario_elemei/image003.png","38000a0ae2481cfff6056310037f8710"],["document/scenario-from-excel/idea-scenario_elemei/image004.png","09130a5b87ffe4164fa4f661e0c76556"],["document/scenario-from-excel/idea-scenario_elemei/image005.png","88023db0fd81a7f71ba9e8aeab83e964"],["document/scenario-from-excel/idea-scenario_elemei/image006.png","406172c2f7745ca9922216a8a1d43d62"],["document/scenario-from-excel/idea-scenario_elemei/image007.png","7a86c869f451a82255edb678084b7f96"],["document/scenario-from-excel/idea-scenario_elemei/image008.png","a97355e7321604271c213d8b02cc36c0"],["document/scenario-from-excel/idea-scenario_elemei/image009.png","5c7826fbe12d8dcc9fc11cf6ee72d074"],["document/scenario-from-excel/idea-scenario_elemei/image010.png","e632c95579b88be86e49312b2331fa93"],["document/scenario-from-excel/idea-scenario_elemei/image011.png","67e0affee117df792091cff45020a56e"],["document/scenario-from-excel/idea-scenario_elemei/image012.png","3bba71d545c897318297c9529132e00e"],["document/scenario-from-excel/idea-scenario_elemei/image013.png","8a20f87a9f1c40adc8e27fedbce2d951"],["document/scenario-from-excel/idea-scenario_elemei/image014.png","c1c2e56d83f190b62f1134e47d504889"],["document/scenario-from-excel/idea-scenario_elemei/image015.png","f98e0b698ed59016d94e6ae82ccdbef2"],["document/scenario-from-excel/idea-scenario_elemei/image016.png","e61f7edd2167df43919e78f1af22c00e"],["document/scenario-from-excel/idea-scenario_elemei/image017.png","aa775075f179974a0d40a85166918860"],["document/scenario-from-excel/idea-scenario_elemei/image018.png","555cfb01b8d8dcef23382b07893da69d"],["document/scenario-from-excel/idea-scenario_elemei/image019.png","cea1d168a72c41b161a2a01631efa210"],["document/scenario-from-excel/idea-scenario_elemei/image020.png","93d3b9c9c5f25373bd1dfb695652b16e"],["document/scenario-from-excel/idea-scenario_elemei/image021.png","1230f5fb6b2c8eb1859e053d1a61a694"],["document/scenario-from-excel/idea-scenario_elemei/image022.png","d7b8724fac85c1042c3750759d93827e"],["document/scenario-from-excel/idea-scenario_elemei/image023.png","985fbc44273fd96c3e4e91c1dee24e54"],["document/scenario-from-excel/idea-scenario_elemei/image024.png","a4f755c3159bf3f98183671f83532303"],["document/scenario-from-excel/idea-scenario_elemei/image025.png","8d9fc46e7c22d4212679a69a9778a378"],["document/scenario-from-excel/idea-scenario_elemei/image026.png","e2ab5afd08ec30681e4a9338700f92c1"],["document/scenario-from-excel/idea-scenario_elemei/image027.png","44dc4392567ce3fb6b3104c7509201b7"],["document/scenario-from-excel/idea-scenario_elemei/image028.png","49ca36fc33b3b368faa6c323e2a3bf4b"],["document/scenario-from-excel/idea-scenario_elemei/image029.png","7d436fc3ff14b19d7f2ce2af86d0c72f"],["document/scenario-from-excel/idea-scenario_elemei/image030.png","d5046d030e1ccfa5ddae12b0f537d8f9"],["document/scenario-from-excel/idea-scenario_elemei/image031.png","4ec695408a5a6c92df32ae28d434b1e4"],["document/scenario-from-excel/idea-scenario_elemei/image032.png","2a41555785d8dafb69b6dcc4797076ea"],["document/scenario-from-excel/idea-scenario_elemei/image033.png","beb4d5751bbab3c61360f97013ced21a"],["document/scenario-from-excel/idea-scenario_elemei/image034.png","5bf0f49bbda9e6f2c7a68614498af0ba"],["document/scenario-from-excel/idea-scenario_elemei/image035.png","4b910fdbef8fe37abcc40e5bba183f46"],["document/scenario-from-excel/idea-scenario_elemei/image036.png","416a47fb36c6a14fc85ecea6c61cf543"],["document/scenario-from-excel/idea-scenario_elemei/image037.png","3105224622c2d4cd5cbd178868ecd337"],["document/scenario-from-excel/idea-scenario_elemei/image038.png","2aabb03e6ac328a75b7079b5225b88fe"],["document/scenario-from-excel/idea-scenario_elemei/image039.png","5166fac006594ad2f5bbd4cbbfb2ef14"],["document/scenario-from-excel/idea-scenario_elemei/image040.png","1c536d38162c533783d1ec6156a029fe"],["document/scenario-from-excel/idea-scenario_elemei/image041.png","7cd627aeb9f219a5c7ce2915ea9b44cf"],["document/scenario-from-excel/idea-scenario_elemei/image042.png","a715f5a0de27c9e37ef7cfec1cbd5000"],["document/scenario-from-excel/idea-scenario_elemei/image043.png","4c9db53a27781fe0aaa1ce9b4b931335"],["document/scenario-from-excel/idea-scenario_elemei/image044.png","9af5d683fd677ce12191432024a5644c"],["document/scenario-from-excel/idea-scenario_elemei/image045.png","3794f387272c640eaae9d23da886abae"],["document/scenario-from-excel/idea-scenario_elemei/image046.png","ef3339f94367175e2d9009f92b5c9fa4"],["document/scenario-from-excel/idea-scenario_elemei/image047.png","2845f6140379b60a79071303bb6680d4"],["document/scenario-from-excel/idea-scenario_elemei/image048.png","10966e7656565dcb087ea7cee9101318"],["document/scenario-from-excel/idea-scenario_elemei/image049.png","14c812cbf41d7a8554d34d5fff573c73"],["document/scenario-from-excel/idea-scenario_elemei/image050.png","303d3951558739677042ae476f7b7654"],["document/scenario-from-excel/idea-scenario_elemei/image051.png","57fcbc6231194a38b12677e94d4c1b96"],["document/scenario-from-excel/idea-scenario_elemei/image052.png","5b0464b2cb2cdb8d57d0266ea91193b2"],["document/scenario-from-excel/idea-scenario_elemei/image053.png","60efa19678f26680a7d2da2a8eba74e8"],["document/scenario-from-excel/idea-scenario_elemei/image054.png","3d2cea0a6f5093571309571f19dce959"],["document/scenario-from-excel/idea-scenario_elemei/image055.png","608848c030e556e4b3dc9df9c9be153d"],["document/scenario-from-excel/idea-scenario_elemei/image056.png","8db1e1b04f37d6b9792749d721a3b82b"],["document/scenario-from-excel/idea-scenario_elemei/image057.png","3c1841a0e0bea95f8da96b7a6b2482d3"],["document/scenario-from-excel/idea-scenario_elemei/image058.png","da757ff5c5603002f2da419d6f1de4b1"],["document/scenario-from-excel/idea-scenario_elemei/image059.png","7b71293c361a65075c06482a2e08d048"],["document/scenario-from-excel/idea-scenario_elemei/image060.png","25d98f146124989b14ece1d5ee7efa7f"],["document/scenario-from-excel/idea-scenario_elemei/image061.png","ea45ab686a95231ce3b6aa49176cfad1"],["document/scenario-from-excel/idea-scenario_elemei/image062.png","ad89a67c5381d1d0f870d3f5f73d4859"],["document/scenario-from-excel/idea-scenario_elemei/image063.png","02555a134aa20abe508931bef7e4bb73"],["document/scenario-from-excel/idea-scenario_elemei/image064.png","0e525071df1b35ee5f66d8662cb510b7"],["document/scenario-from-excel/idea-scenario_elemei/image065.png","e1156c08fda2b87050c4b3a98e207554"],["document/scenario-from-excel/idea-scenario_elemei/image066.png","25bef50190cae58b3305ca83366f46b2"],["document/scenario-from-excel/idea-scenario_elemei/image067.png","cb1eadda3bc783ec7eb6837d274dadfb"],["document/scenario-from-excel/idea-scenario_elemei/image068.png","84a02e582f300ae9ede218a823bb0b45"],["document/scenario-from-excel/idea-scenario_elemei/image069.png","c25fcf687d4b671cd1e09397337229a3"],["document/scenario-from-excel/idea-scenario_elemei/image070.png","a7c389ac626c5b6ea1beb6af3fa4b050"],["document/scenario-from-excel/idea-scenario_elemei/image071.png","25eb6fe96260e4edb2e804b1e098f188"],["document/scenario-from-excel/idea-scenario_elemei/image072.png","fdfc307d86f8473aeffacc0c72f94b42"],["document/scenario-from-excel/idea-scenario_elemei/image073.png","192dd2d6724f1b42f85da57cf92cd356"],["document/scenario-from-excel/idea-scenario_elemei/image074.png","1cc7b8d2533394877e93b211c0d21b67"],["document/scenario-from-excel/idea-scenario_elemei/image075.png","a2338aa1b205889ad77c3122cbd9f71f"],["document/scenario-from-excel/idea-scenario_elemei/image076.png","a4cde1b0fbd245f13459f2c6d36a8dd2"],["document/scenario-from-excel/idea-scenario_elemei/image077.png","5aa9d2b85a21839febfa9e78d379b5b5"],["document/scenario-from-excel/idea-scenario_elemei/image078.png","b274635a2e39451f71dabbe7a95ed36c"],["document/scenario-from-excel/idea-scenario_elemei/image079.png","ffcac71a0dc979fa6eeedfa79f683669"],["document/scenario-from-excel/idea-scenario_elemei/image080.png","c52e69767878959b4514afa8f76ec6e9"],["document/scenario-from-excel/idea-scenario_elemei/image081.png","c74ddd5ad249ee9677953b6fbae0cdc7"],["document/scenario-from-excel/idea-scenario_elemei/image082.png","71205aa5b1ea0e38b007839c67319a95"],["document/scenario-from-excel/idea-scenario_elemei/image083.png","cfbfd055cbd240a15bfc0c0cf6f45a55"],["document/scenario-from-excel/idea-scenario_elemei/image084.png","b0e57675b13b569c7b47a0e099e8793f"],["document/scenario-from-excel/idea-scenario_elemei/image085.png","0fb2ced0a382419c7470e52b90ed1850"],["document/scenario-from-excel/idea-scenario_elemei/image086.png","868238604701a139c93d5d7b552d9696"],["document/scenario-from-excel/idea-scenario_elemei/image087.png","aca3a7d30d7f4c83fb32bd49e446e388"],["document/scenario-from-excel/idea-scenario_elemei/image088.png","fd4271a256dba0d1f54be4431a3aec7d"],["document/scenario-from-excel/idea-scenario_elemei/image089.png","3b4f8d3f0238533974a8bfaf129195c4"],["document/scenario-from-excel/idea-scenario_elemei/image090.png","fb60e6110ec9d1cd79cd164f18a7d177"],["document/scenario-from-excel/idea-scenario_elemei/image091.png","3b0ef70bfa01ec902af6c7fcdbd6f7a9"],["document/scenario-from-excel/idea-scenario_elemei/image092.png","dc26af87e923662940074868f431ab14"],["document/scenario-from-excel/idea-scenario_elemei/image093.png","4917c8a7146145c0e0522a06510dfa62"],["document/scenario-from-excel/idea-scenario_elemei/image094.png","d639916fedfd2da8ece2bad52e7d9b5e"],["document/scenario-from-excel/idea-scenario_elemei/image095.png","8543560ab234638c5b70240330e2f9f2"],["document/scenario-from-excel/idea-scenario_elemei/image096.png","85ddee20195e481e73b357e150493f68"],["document/scenario-from-excel/idea-scenario_elemei/image097.png","b22410b840ad51d791fe6de67ecddf41"],["document/scenario-from-excel/idea-scenario_elemei/image098.png","dc50c71fc75a438ad58a8545bb0b1653"],["document/scenario-from-excel/idea-scenario_elemei/image099.png","2ccf3a81bd6e88aeb031d0e804c8a894"],["document/scenario-from-excel/idea-scenario_elemei/image100.png","a589d3204629e80a65043f29653434b8"],["document/scenario-from-excel/idea-scenario_elemei/image101.png","f4fd1196d0cb88431e723349b432a225"],["document/scenario-from-excel/idea-scenario_elemei/image102.png","3a261b01327e47207d54998da456b150"],["document/scenario-from-excel/idea-scenario_elemei/image103.png","d99733aab941b0d4729c1ddcf71caac0"],["document/scenario-from-excel/idea-scenario_elemei/image104.png","b57fd70cb2356a9a6a638234136070c0"],["document/scenario-from-excel/idea-scenario_elemei/image105.png","6e4e7478fcf055dc55f28fef784d6983"],["document/scenario-from-excel/idea-scenario_elemei/image106.png","434f367b0e030bf60db431b74c2329cc"],["document/scenario-from-excel/idea-scenario_elemei/image107.png","625a888591f4c85b11eedaced2a381a7"],["document/scenario-from-excel/idea-scenario_elemei/image108.png","2ecf7d2945c9cb3eb7712869e2c38271"],["document/scenario-from-excel/idea-scenario_elemei/image109.png","cdfbe10c2e776816d35024721bc8888b"],["document/scenario-from-excel/idea-scenario_elemei/image110.png","432af86f01f2e0fe5bc4c5177087fcf1"],["document/scenario-from-excel/idea-scenario_elemei/image111.png","e9c50e08c386511138f56e09c702616f"],["document/scenario-from-excel/idea-scenario_elemei/image112.png","d613c6904e0b0999ac27805c60ab2b2c"],["document/scenario-from-excel/idea-scenario_elemei/image113.png","4399fec92eb95d9d9ee72b30552f4e15"],["document/scenario-from-excel/idea-scenario_elemei/image114.png","352b1c3eed72c59d3389fe71d39acdd6"],["document/scenario-from-excel/idea-scenario_elemei/image115.png","6b30011df7bcaca16a7c35049bd7c817"],["document/scenario-from-excel/idea-scenario_elemei/image116.png","dd73f3a171666be00289fd2f1d57af14"],["document/scenario-from-excel/idea-scenario_elemei/image117.png","ebf00d002d01ec868d2bb80044f7e4c8"],["document/scenario-from-excel/idea-scenario_elemei/image118.png","5ef0136203173f5d1aa1d1cd8ffa9a69"],["document/scenario-from-excel/idea-scenario_elemei/image119.png","ba98c4b25e15ef6d00c082bde30c5449"],["document/scenario-from-excel/idea-scenario_elemei/image120.png","5ebfea850333d86752ecde6a5b0cbabf"],["document/scenario-from-excel/idea-scenario_elemei/image121.png","98eb3bfc3b17fd97719f87d202a7aac9"],["document/scenario-from-excel/idea-scenario_elemei/image122.png","b58a77e882a95fb161b1677bb69ee459"],["document/scenario-from-excel/idea-scenario_elemei/image123.png","fcb1744dd6dcbfba11c8b873f8392a34"],["document/scenario-from-excel/idea-scenario_elemei/image124.png","18d77f1e1af6f32b9070886fda7acfcb"],["document/scenario-from-excel/idea-scenario_elemei/image125.png","d11e0d6d871e2224337d12a33fbafd7b"],["document/scenario-from-excel/idea-scenario_elemei/image126.png","5498cd9c86ecf48b55d0507dd42c45eb"],["document/scenario-from-excel/idea-scenario_elemei/image127.png","61beb77576dbb06691436b5978588ff4"],["document/scenario-from-excel/idea-scenario_elemei/image128.png","a25745af267a5af55ee7aa382d81eb51"],["document/scenario-from-excel/idea-scenario_elemei/image129.png","a392f586b8f4330b5fca3bb7d21d4386"],["document/scenario-from-excel/idea-scenario_elemei/image130.png","cfa127c03fd0ea9f04cb71a9f4b2a0a1"],["document/scenario-from-excel/idea-scenario_elemei/image131.png","0354fc5e8c9b71f83d8ecae2bb2da328"],["document/scenario-from-excel/idea-scenario_elemei/image132.png","dd3cb3fa448d7667c9a0def65a11dc46"],["document/scenario-from-excel/idea-scenario_elemei/image133.png","6f5bc887a2e0470b74fdf6774a142127"],["document/scenario-from-excel/idea-scenario_elemei/image134.png","bb0773244c3e4fa731a326660e18e6b0"],["document/scenario-from-excel/idea-scenario_elemei/image135.png","5c567d4668fe80523400b6c53628a7b3"],["document/scenario-from-excel/idea-scenario_elemei/image136.png","5ecf3d8d399aca1044e24a81ca744a09"],["document/scenario-from-excel/idea-scenario_elemei/image137.png","addd74ac4bdf4f8b39abaca522aa977c"],["document/scenario-from-excel/idea-scenario_elemei/image138.png","ecd12f1b0bf777b9179664ba43aea43e"],["document/scenario-from-excel/idea-scenario_elemei/image139.png","a36b6a9668447e07df228c3f28cec1ae"],["document/scenario-from-excel/idea-scenario_elemei/image140.png","251ac61193783b0d69a2773447947559"],["document/scenario-from-excel/idea-scenario_elemei/image141.png","c7e5e082149bac450652338e18334346"],["document/scenario-from-excel/idea-scenario_elemei/image142.png","67c79e9808b07ae19dfae1ede2694d48"],["document/scenario-from-excel/idea-scenario_elemei/image143.png","eef4b04519d4be6fcbf16d54bc73ae62"],["document/scenario-from-excel/idea-scenario_elemei/image144.png","91c0c048f11babbed40ba99293e872be"],["document/scenario-from-excel/idea-scenario_elemei/image145.png","1729b665fcc8b644b262840e0487e2bc"],["document/scenario-from-excel/idea-scenario_elemei/image146.png","c693fa85a1d20fee238cddab1a8a7ce1"],["document/scenario-from-excel/idea-scenario_elemei/image147.png","958d78c352d4bdc2d82dbe436f4f809c"],["document/scenario-from-excel/idea-scenario_elemei/image148.png","e22b10d2194b9aa4018b68d30e8e89ae"],["document/scenario-from-excel/idea-scenario_elemei/image149.png","79c9a6f05ad44360aa9be6d56f9d417c"],["document/scenario-from-excel/idea-scenario_elemei/image150.png","336adfe2a6e8c7ced6d336ae93bc0f09"],["document/scenario-from-excel/idea-scenario_elemei/image151.png","b23b63bf1c03869b0cc5260fb23dfc83"],["document/scenario-from-excel/idea-scenario_elemei/image152.png","fa7009059ee9d88e40d6263b622994ca"],["document/scenario-from-excel/idea-scenario_elemei/image153.png","59db13f356e08f61eec97a45f2935c00"],["document/scenario-from-excel/idea-scenario_elemei/image154.png","dcb10791557ef7b8ddc1cc6f0e3babc2"],["document/scenario-from-excel/idea-scenario_elemei/image155.png","8401149c4b39df8530f9272fc65c31bd"],["document/scenario-from-excel/idea-scenario_elemei/image156.png","85fd74c7563beab10de05afbd7a174f0"],["document/scenario-from-excel/idea-scenario_elemei/image157.png","378933eb9bc2c87bb01c51a9b434a8c1"],["document/scenario-from-excel/idea-scenario_elemei/image158.png","45b421866aa50ecc48b138f546cac8d8"],["document/scenario-from-excel/idea-scenario_elemei/image159.png","90c7865437a716afe9329eb3c6e0c75a"],["document/scenario-from-excel/idea-scenario_elemei/image160.png","0d655cd57c467d4d91f847c57d93fd9c"],["document/scenario-from-excel/idea-scenario_elemei/image161.png","3d0b41ca0cf2d33a877cf2f2cbfbce15"],["document/scenario-from-excel/idea-scenario_elemei/image162.png","6ec18799ece61523e1aadc4b23540c5c"],["document/scenario-from-excel/idea-scenario_elemei/image163.png","34e847995ff81211f269f0c58f86dc5b"],["document/scenario-from-excel/idea-scenario_elemei/image164.png","951730f0f2f01518f567449802c5af2c"],["document/scenario-from-excel/idea-scenario_elemei/image165.png","da361ce70c17e18fb8db67a5afda5945"],["document/scenario-from-excel/idea-scenario_elemei/image166.png","6a12ca75e34930dfba6035c0bf3d7063"],["document/scenario-from-excel/idea-scenario_elemei/image167.png","76cec1820c6b813feafa055079f004e3"],["document/scenario-from-excel/idea-scenario_elemei/image168.png","c6acc49762fab7d1250f6f10c7be74c0"],["document/scenario-from-excel/idea-scenario_elemei/image169.png","f925bb873655ffb8b010362f9b7071e9"],["document/scenario-from-excel/idea-scenario_elemei/image170.png","8765c6a85501058eb8faa62b84e03b61"],["document/scenario-from-excel/idea-scenario_elemei/image171.png","60810775deab0c06b82f0c0c733bbad0"],["document/scenario-from-excel/idea-scenario_elemei/image172.png","bc9e32650d8f1757e29d7f29e0549893"],["document/scenario-from-excel/idea-scenario_elemei/image173.png","99bef38b6cb6531249ab7344b511878a"],["document/scenario-from-excel/idea-scenario_elemei/image174.png","48d66bc702f693ba51f313d3439683ce"],["document/scenario-from-excel/idea-scenario_elemei/image175.png","7839e92195ac0b673a60475b31a78541"],["document/scenario-from-excel/idea-scenario_elemei/image176.png","3c209d28b25cf762d1e50a0811a035f9"],["document/scenario-from-excel/idea-scenario_elemei/image177.png","8ca3504e49d8907ae8bc6ba54ba9b874"],["document/scenario-from-excel/idea-scenario_elemei/image178.png","49271eb96db97f9eea55629f35e4a4be"],["document/scenario-from-excel/idea-scenario_elemei/image179.png","e5ab4d9f49fe74d14dbea13815d3e523"],["document/scenario-from-excel/idea-scenario_elemei/image180.png","c2452bc2b283acd6cf23451ab828d01a"],["document/scenario-from-excel/idea-scenario_elemei/image181.png","6681c6cd80cf132adb4cbecce1e16614"],["document/scenario-from-excel/idea-scenario_elemei/image182.png","ddf605ef056856d24ecd62824c700ab0"],["document/scenario-from-excel/idea-scenario_elemei/image183.png","d0d10b9534835a030590c85172ce1c21"],["document/scenario-from-excel/idea-scenario_elemei/image184.png","3812169e0fc21ae90bb2419fcf009cfc"],["document/scenario-from-excel/idea-scenario_elemei/image185.png","ad89aa9a642b82a6b7aa843fcde685e0"],["document/scenario-from-excel/idea-scenario_elemei/image186.png","716416ef16c6484da1ec3985bc46ca50"],["document/scenario-from-excel/idea-scenario_elemei/image187.png","0fb4a2c128a16f5b59b43dbd6517fb26"],["document/scenario-from-excel/idea-scenario_elemei/image188.png","005df8d802a747dce48abe6fb398d393"],["document/scenario-from-excel/idea-scenario_elemei/image189.png","f0c8d1a5bc059c487fd7cd034f726df9"],["document/scenario-from-excel/idea-scenario_elemei/image190.png","a4b19475e49086d6536ed84505492430"],["document/scenario-from-excel/idea-scenario_elemei/image191.png","d92412c7a262a7674d464367559e3532"],["document/scenario-from-excel/idea-scenario_elemei/image192.png","ff99a9ab0d605d066287c576d26e7943"],["document/scenario-from-excel/idea-scenario_elemei/image193.png","ff491264673d583083a7dde38b841b43"],["document/scenario-from-excel/idea-scenario_elemei/image194.png","7ce4bf338769b2e485beced371e8dc8d"],["document/scenario-from-excel/idea-scenario_elemei/image195.png","3ac935a9e7690d0e29880248bc4cf899"],["document/scenario-from-excel/idea-scenario_elemei/image196.png","e91c1b131b256cf81bfb67aa3e7bb791"],["document/scenario-from-excel/idea-scenario_elemei/image197.png","b3f21602f01a95aed49e0d8c2a452546"],["document/scenario-from-excel/idea-scenario_elemei/image198.png","b902aecf389dade7ca71bba7f16c5ab4"],["document/scenario-from-excel/idea-scenario_elemei/image199.png","b73ae2a0eb35a0019268c943cc3479d9"],["document/scenario-from-excel/idea-scenario_elemei/image200.png","02e9ea3825ea5dccdb6c5483490828a3"],["document/scenario-from-excel/idea-scenario_elemei/image201.png","eda90952aa0aa98db356d883ab45dfa9"],["document/scenario-from-excel/idea-scenario_elemei/image202.png","709f24dd23b6221f2374d47b66ac708c"],["document/scenario-from-excel/idea-scenario_elemei/image203.png","e2c1b5d1a0e38fc6081a46b1f25e5688"],["document/scenario-from-excel/idea-scenario_elemei/image204.png","b33fc57d34b76a536de6c0f216db87ca"],["document/scenario-from-excel/idea-scenario_elemei/image205.png","8e5160c99be7c51231929695c29bef4e"],["document/scenario-from-excel/idea-scenario_elemei/image206.png","16b88fa982afe93f4fadf47887fd3ff3"],["document/scenario-from-excel/idea-scenario_elemei/image207.png","16569a1eebc37dee82b9c4384f5f054b"],["document/scenario-from-excel/idea-scenario_elemei/image208.png","ffe410de8dfe8e8ebf6c2c2600225eaf"],["document/scenario-from-excel/idea-scenario_elemei/image209.png","ccf05a945e3be3a1c4e0228c959605df"],["document/scenario-from-excel/idea-scenario_elemei/image210.png","403fc4a99b01a82af2a7d9b6ae46ee86"],["document/scenario-from-excel/idea-scenario_elemei/image211.png","273897bf05a751d1bd37db9abe6ea319"],["document/scenario-from-excel/idea-scenario_elemei/image212.png","b1464936d982941ec5166c92264b14e9"],["document/scenario-from-excel/idea-scenario_elemei/image213.png","f67e1509a95f16fd78ddf7f18bbfbed4"],["document/scenario-from-excel/idea-scenario_elemei/image214.png","53713d99e03f07a64bea84b5e56c4ceb"],["document/scenario-from-excel/idea-scenario_elemei/image215.png","4ef02bfa863011e50f3cc34b18be852e"],["document/scenario-from-excel/idea-scenario_elemei/image216.png","8fe19a97591614fa7a12f5ef1a882504"],["document/scenario-from-excel/idea-scenario_elemei/image217.png","777e3d729fb10e347cd7f37ab65b4258"],["document/scenario-from-excel/idea-scenario_elemei/image218.png","86e5ab799a4b467608a796959d7c76fa"],["document/scenario-from-excel/idea-scenario_elemei/image219.png","d4f7b89d0f0459858391048282302d25"],["document/scenario-from-excel/idea-scenario_elemei/image220.png","20afba102a5a83504684fe4e09cd2b06"],["document/scenario-from-excel/idea-scenario_elemei/image221.png","22ebed8e12c3e5d385c60c50573e34d6"],["document/scenario-from-excel/index.html","b207c6cb2d90c378eaefe5b4b9b701dd"],["document/scenario-from-excel/victory.md","21106e5f536634b2c3b415100d81c37f"],["document/todo.md","28d34732a3724a64762dcfa9cda57759"],["favicon.ico","092b572a42811e131741f93f4603ced7"],["fonts/FiraSansExtraCondensed-Medium-latin-ext.woff2","4bd08d3db75498ebc5f3734b92df0beb"],["fonts/FiraSansExtraCondensed-Medium-latin.woff2","75450c16676befb89b02e4c16a2986f9"],["fonts/FiraSansExtraCondensed-Regular-latin-ext.woff2","c53484a93c864aa20ae0865837f258e0"],["fonts/FiraSansExtraCondensed-Regular-latin.woff2","62a9e2570fbe9c3b1e9b9bb84680cbf6"],["icon_128x128.30e0bb2a951b7bebad7ca0af2ef573cb.png","30e0bb2a951b7bebad7ca0af2ef573cb"],["icon_192x192.684dcc21f94dd78ce317de911cc213a5.png","684dcc21f94dd78ce317de911cc213a5"],["icon_256x256.48c3fd32ebd933abc52f303ca64b9e06.png","48c3fd32ebd933abc52f303ca64b9e06"],["icon_384x384.7af8e830a67b01d5636b199993235f89.png","7af8e830a67b01d5636b199993235f89"],["icon_512x512.01271075236a6a8a0302da808faf76c1.png","01271075236a6a8a0302da808faf76c1"],["icon_96x96.8bec0ef0df2346807185ad94d0a6c0e0.png","8bec0ef0df2346807185ad94d0a6c0e0"],["idea.js","cbe641d7909a055e853f8490ae321d2b"],["img/caves/barlang-01.png","1cf79edc32f0c3e524a5f60e5b3dffe2"],["img/caves/blue-cave.png","9c3784f2d50b29c0f43bd7e86610c002"],["img/caves/building-cave.png","a6c2cf8661aebb13ee0b6cf96654e1b6"],["img/caves/chain-cave.png","8233fee5a0d4abb5508fd2e46ec10a8e"],["img/caves/city.png","c7cb708b0186792fc1d2df706cc8d1a8"],["img/caves/door-closed.png","1affbe1e650b93638b14b2ec3ea0ee51"],["img/caves/enginer-cave.png","1b375a3c5312e6f08047273c304ba05a"],["img/caves/entrance.png","052a8127092afa8cbba4dc769497d6fd"],["img/caves/fang-cave.png","d2df47b71d02e362b0068f38d36b1d05"],["img/caves/island.png","360b798dfc008c659057d96d2bdbfb7b"],["img/caves/light-cave.png","44cbc4a8ca864f174e0f8e2a27d94e0e"],["img/caves/needle-cave.png","13d86049c764f1da8bd67bed9c5c0809"],["img/caves/prisoner-place.png","dbf69a663434c358b46276aacea90be9"],["img/caves/prisoner-route-1.png","fd574de7c5e3a644a538fa613d7c6802"],["img/caves/prisoner-route-2.png","6576d05806c66e341e520623b76acd4c"],["img/caves/red-cave.png","1a994c8422d0d306ccfdbcee3b4c0fab"],["img/caves/road-cave.png","15bc6da0904590ce0890017bc7a37778"],["img/caves/staircase-cave.png","406b95f41495ab2df39be9e93bd6e11a"],["img/caves/waterfall-cave.png","24ccfd5605dd6a3987f15ab29f913bd5"],["img/caves/wheel-cave.png","45a4811fbb94a8b1aa614cc41479bb5d"],["img/gui/adeimantosz.png","86e5dc1d474a408c3877344ec20649cf"],["img/gui/bag.png","f8ee8b7167911c69c46788caf80b5f7e"],["img/gui/bottom-gui.png","e1f299ec30812c4505b95463cc90bd65"],["img/gui/circle-frame.png","3de327c45ed22ffa71a845ee1bcdad2b"],["img/gui/dark-gold-intro.png","6b5b1555fd07ae8c8415c5188e1b9bb0"],["img/gui/glaukon.png","193eae81db1d073dba7c87b05b48f9f4"],["img/gui/interacive-map.png","99260bad7e71bbbcc99507b10e5cc0eb"],["img/gui/intro-button.png","576f46e197702d35005737e22c634aac"],["img/gui/lvl-1-char.png","185eddfc43c7948c9ec9c69a4f2b2117"],["img/gui/lvl-2-char.png","a18e88976095a14ab891f48e5ded23d9"],["img/gui/map-close.png","e0d533f324493fd3e608bbb1e23de738"],["img/gui/map.png","7aea5ca2185ae353c55615acf2d8208a"],["img/gui/papper.png","088d0dcab64aa3da48120f6e80fe4927"],["img/gui/pergamen.png","e40589a731f720bb32964fa969a70bf6"],["img/gui/prisoner-on-scene.png","0036ec444c86ec831021d1214b57f4c5"],["img/gui/route-arrow.png","40240182e88d28985e8bd7c0b8aa1e3d"],["img/gui/saved.png","5f2e2345b44656afc5c55849e9db0af8"],["img/gui/setup.png","2b160c71886b31c9642fdc0614118b42"],["img/gui/simple-textured-bg.png","95ea3f02410bb216d91f58969d8684da"],["img/gui/small-logo.png","b8a8f95d84a67937938536bc88cb05ea"],["img/gui/speak.png","f678735a574f8c91c41cdae7770c92e1"],["img/gui/top-gui.png","79d343791f44a2f89da51a6a63372b1d"],["img/gui/underground.jpg","7161a06750d61eefbe79a60de2bf88f2"],["img/gui/underground.png","1ff3eff7b6a8cdebada02807be1dc946"],["img/icons/pwa-icon-idea.png","268fb898bb913904385da834cca9e337"],["img/mobs/item-01.png","4f7e1a5238d4bdde4a27987b71bdcf5f"],["img/mobs/item-02.png","d0101f3a7219c1ab21bb7481c09323af"],["img/mobs/item-03.png","7363f56eb82344b7e297f94f81fd88f2"],["img/mobs/item-04.png","bb14bb72ff65ade3e82627f850fa5d2f"],["img/mobs/item-05.png","c38b961b9e0dc6ecb302bb1a27e63fe0"],["img/mobs/item-06.png","71be1ac606190f1a71d3f987de317705"],["img/mobs/item-07.png","9b791c2ba446088325c805e089d63f56"],["img/mobs/item-08.png","c04e190d97c7c31d8141d6e625c54e65"],["img/mobs/item-09.png","c9c3f2940f8298dd01ac74a5fbc2da5a"],["img/mobs/item-10.png","b648c38b6e5757cb0646be7549dee619"],["img/mobs/item-11.png","d119499815c9f19a56376d5f190eb6a1"],["img/mobs/item-12.png","891f02989acacecefdefe600373972f8"],["img/mobs/prisoner-01.png","fb7a19316c3fcacf46dda76102b03504"],["img/mobs/prisoner-02.png","708b97971ff144061f701bc8f4c29500"],["img/mobs/prisoner-03.png","46838cf159140f9e7bba47ba45a82628"],["img/mobs/prisoner-04.png","1249cc5276a0b550fd004827d79b2215"],["img/mobs/prisoner-05.png","b70c210253cca7519d1c49ebf7081981"],["img/mobs/prisoner-06.png","fa1ebf12bd72bb8c61abfa19eba85679"],["img/mobs/prisoner-07.png","ef47271fc0ed31ba84df9b002d1136cf"],["img/mobs/prisoner-08.png","07324c108a6e911f12a11d06cfdb4647"],["img/mobs/prisoner-09.png","ae79a30c2bcc63e594f02d86857e2cb9"],["img/mobs/prisoner-10.png","140746b75c6f09d3694bd27f8bc0b2e9"],["img/mobs/prisoner-11.png","f57a6d97285d72c6e11b363f613c57d6"],["img/mobs/prisoner-12.png","9f582d3522e1cb5835a0ca44b060e079"],["img/quest/continuos-path.jpg","8e592ecfcb4c2950e8f9c1e67f53810d"],["img/quest/equipment-quest.jpg","8d4eb748e5e5aa5d1c4ff49879382b74"],["img/quest/found-all-projection.jpg","b35f82b87fe68811afa0b53e30167ff2"],["img/quest/found-cube-uv.jpg","207ab869bf63e71013a70ea0646ae73f"],["img/quest/found-tetraeder-uv.jpg","0c5ba204cdc5d19b835acc20af5e3c8f"],["img/quest/open-code.jpg","bf206a14ba09b57b5e3787c4b6d7ee97"],["img/quest/pipeline-quest.jpg","3760f0eb88da5cc325c1ad5c4cfaa5ba"],["img/quest/point-projection.jpg","1f8b63c5cef851b73eb403456f39b1f9"],["img/quest/quest-bg.jpg","6b7ad9dff7fdc9f360e0e82138a23e96"],["img/quest/roman-numbers.jpg","c25f9a41fb6b0eea1b8b1b708b984e45"],["img/quest/solid-by-projection.jpg","b8bc080c9d56e908cd96ab13ec9facc7"],["index.html","f8027377009c1a0e54af7393b87579c7"],["manifest.json","69a7ab5370643eee5f98b38fda295c34"]];
var cacheName = 'sw-precache-v3-0.237-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







