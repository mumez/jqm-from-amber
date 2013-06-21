smalltalk.addPackage('Jqm-Canvas');
smalltalk.addClass('JqmCanvas', smalltalk.HTMLCanvas, ['namespace'], 'Jqm-Canvas');
smalltalk.addMethod(
smalltalk.method({
selector: "backButtonTo:",
category: 'tags',
fn: function (refId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._backRel())._href_(_st("#").__comma(refId));
return $1;
}, function($ctx1) {$ctx1.fill(self,"backButtonTo:",{refId:refId},smalltalk.JqmCanvas)})},
args: ["refId"],
source: "backButtonTo: refId\x0a\x09^self backRel href: ('#', refId)",
messageSends: ["href:", ",", "backRel"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "backRel",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._a())._dataRel_("back");
return $1;
}, function($ctx1) {$ctx1.fill(self,"backRel",{},smalltalk.JqmCanvas)})},
args: [],
source: "backRel\x0a\x09^self a dataRel: 'back'",
messageSends: ["dataRel:", "a"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "button",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._a())._dataRole_("button");
return $1;
}, function($ctx1) {$ctx1.fill(self,"button",{},smalltalk.JqmCanvas)})},
args: [],
source: "button\x0a\x09^self a dataRole: 'button'",
messageSends: ["dataRole:", "a"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonLabeled:to:",
category: 'tags',
fn: function (label,refId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._buttonTo_(refId))._with_(label);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buttonLabeled:to:",{label:label,refId:refId},smalltalk.JqmCanvas)})},
args: ["label", "refId"],
source: "buttonLabeled: label to: refId\x0a\x09^(self buttonTo: refId) with: label",
messageSends: ["with:", "buttonTo:"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonLabeled:to:id:",
category: 'tags',
fn: function (label,refId,id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._buttonTo_(refId);
_st($2)._id_(id);
$3=_st($2)._with_(label);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"buttonLabeled:to:id:",{label:label,refId:refId,id:id},smalltalk.JqmCanvas)})},
args: ["label", "refId", "id"],
source: "buttonLabeled: label to: refId id: id\x0a\x09^(self buttonTo: refId) id: id; with: label",
messageSends: ["id:", "buttonTo:", "with:"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonTo:",
category: 'tags',
fn: function (refId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._button())._href_(_st("#").__comma(refId));
return $1;
}, function($ctx1) {$ctx1.fill(self,"buttonTo:",{refId:refId},smalltalk.JqmCanvas)})},
args: ["refId"],
source: "buttonTo: refId\x0a\x09^self button href: ('#', refId)",
messageSends: ["href:", ",", "button"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "closeButton",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._button())._dataRel_("close");
return $1;
}, function($ctx1) {$ctx1.fill(self,"closeButton",{},smalltalk.JqmCanvas)})},
args: [],
source: "closeButton\x0a\x09^self button dataRel: 'close'",
messageSends: ["dataRel:", "button"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "collapsible",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("collapsible");
return $1;
}, function($ctx1) {$ctx1.fill(self,"collapsible",{},smalltalk.JqmCanvas)})},
args: [],
source: "collapsible\x0a\x09^self div dataRole: 'collapsible'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "collapsibleSet",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("collapsible-set");
return $1;
}, function($ctx1) {$ctx1.fill(self,"collapsibleSet",{},smalltalk.JqmCanvas)})},
args: [],
source: "collapsibleSet\x0a\x09^self div dataRole: 'collapsible-set'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "content",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("content");
return $1;
}, function($ctx1) {$ctx1.fill(self,"content",{},smalltalk.JqmCanvas)})},
args: [],
source: "content\x0a\x09^self div dataRole: 'content'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "content:",
category: 'tags',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._content())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"content:",{aBlock:aBlock},smalltalk.JqmCanvas)})},
args: ["aBlock"],
source: "content: aBlock\x0a\x09^self content with: aBlock",
messageSends: ["with:", "content"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "controlGroup",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("controlgroup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlGroup",{},smalltalk.JqmCanvas)})},
args: [],
source: "controlGroup\x0a\x09^self div dataRole: 'controlgroup'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "controlGroup:",
category: 'tags',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._controlGroup())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlGroup:",{aBlock:aBlock},smalltalk.JqmCanvas)})},
args: ["aBlock"],
source: "controlGroup: aBlock\x0a\x09^self controlGroup with: aBlock",
messageSends: ["with:", "controlGroup"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dialogButtonLabeled:to:",
category: 'tags',
fn: function (label,refId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._dialogButtonTo_(refId))._with_(label);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dialogButtonLabeled:to:",{label:label,refId:refId},smalltalk.JqmCanvas)})},
args: ["label", "refId"],
source: "dialogButtonLabeled: label to: refId\x0a\x09^(self dialogButtonTo: refId) with: label",
messageSends: ["with:", "dialogButtonTo:"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dialogButtonTo:",
category: 'tags',
fn: function (refId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._dialogRel())._href_(_st("#").__comma(refId));
return $1;
}, function($ctx1) {$ctx1.fill(self,"dialogButtonTo:",{refId:refId},smalltalk.JqmCanvas)})},
args: ["refId"],
source: "dialogButtonTo: refId\x0a\x09^self dialogRel\x09href: ('#', refId)",
messageSends: ["href:", ",", "dialogRel"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dialogRel",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._a())._dataRel_("dialog");
return $1;
}, function($ctx1) {$ctx1.fill(self,"dialogRel",{},smalltalk.JqmCanvas)})},
args: [],
source: "dialogRel\x0a\x09^self a dataRel: 'dialog'",
messageSends: ["dataRel:", "a"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "externalRel",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._a())._dataRel_("external");
return $1;
}, function($ctx1) {$ctx1.fill(self,"externalRel",{},smalltalk.JqmCanvas)})},
args: [],
source: "externalRel\x0a\x09^self a dataRel: 'external'",
messageSends: ["dataRel:", "a"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "externalRel:",
category: 'tags',
fn: function (url){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._externalRel())._href_(url);
return $1;
}, function($ctx1) {$ctx1.fill(self,"externalRel:",{url:url},smalltalk.JqmCanvas)})},
args: ["url"],
source: "externalRel: url\x0a\x09^self externalRel href: url",
messageSends: ["href:", "externalRel"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fieldContain",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("fieldcontain");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fieldContain",{},smalltalk.JqmCanvas)})},
args: [],
source: "fieldContain\x0a\x09^self div dataRole: 'fieldcontain'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fieldContain:",
category: 'tags',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._fieldContain())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fieldContain:",{aBlock:aBlock},smalltalk.JqmCanvas)})},
args: ["aBlock"],
source: "fieldContain: aBlock\x0a\x09^self fieldContain with: aBlock",
messageSends: ["with:", "fieldContain"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "footer",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("footer");
return $1;
}, function($ctx1) {$ctx1.fill(self,"footer",{},smalltalk.JqmCanvas)})},
args: [],
source: "footer\x0a\x09^self div dataRole: 'footer'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "footer:",
category: 'tags',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._footer())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"footer:",{aBlock:aBlock},smalltalk.JqmCanvas)})},
args: ["aBlock"],
source: "footer: aBlock\x0a\x09^self footer with: aBlock",
messageSends: ["with:", "footer"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "header",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("header");
return $1;
}, function($ctx1) {$ctx1.fill(self,"header",{},smalltalk.JqmCanvas)})},
args: [],
source: "header\x0a\x09^self div dataRole: 'header'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "header:",
category: 'tags',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._header())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"header:",{aBlock:aBlock},smalltalk.JqmCanvas)})},
args: ["aBlock"],
source: "header: aBlock\x0a\x09^self header with: aBlock",
messageSends: ["with:", "header"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "listDivider",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._li())._dataRole_("list-divider");
return $1;
}, function($ctx1) {$ctx1.fill(self,"listDivider",{},smalltalk.JqmCanvas)})},
args: [],
source: "listDivider\x0a\x09^self li dataRole: 'list-divider'",
messageSends: ["dataRole:", "li"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "mobile",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._root())._mobile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mobile",{},smalltalk.JqmCanvas)})},
args: [],
source: "mobile\x0a\x09^ self root mobile",
messageSends: ["mobile", "root"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@namespace"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@namespace"]="";
$1=self["@namespace"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"namespace",{},smalltalk.JqmCanvas)})},
args: [],
source: "namespace\x0a\x09^ namespace ifNil: [namespace := '']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@namespace"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"namespace:",{aString:aString},smalltalk.JqmCanvas)})},
args: ["aString"],
source: "namespace: aString\x0a\x09namespace := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "navbar",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("navbar");
return $1;
}, function($ctx1) {$ctx1.fill(self,"navbar",{},smalltalk.JqmCanvas)})},
args: [],
source: "navbar\x0a\x09^self div dataRole: 'navbar'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "newTag:",
category: 'factory',
fn: function (aString){
var self=this;
var tag;
function $JqmTagBrush(){return smalltalk.JqmTagBrush||(typeof JqmTagBrush=="undefined"?nil:JqmTagBrush)}
return smalltalk.withContext(function($ctx1) { 
var $1;
tag=_st($JqmTagBrush())._fromString_canvas_(aString,self);
_st(tag)._namespace_(_st(self)._namespace());
$1=tag;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTag:",{aString:aString,tag:tag},smalltalk.JqmCanvas)})},
args: ["aString"],
source: "newTag: aString\x0a\x09| tag |\x0a\x09tag := JqmTagBrush fromString: aString canvas: self.\x0a\x09tag namespace: self namespace.\x0a\x09^tag",
messageSends: ["fromString:canvas:", "namespace:", "namespace"],
referencedClasses: ["JqmTagBrush"]
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "normalCanvas",
category: 'accessing',
fn: function (){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HTMLCanvas())._onJQuery_(_st(_st(self)._root())._asJQuery());
return $1;
}, function($ctx1) {$ctx1.fill(self,"normalCanvas",{},smalltalk.JqmCanvas)})},
args: [],
source: "normalCanvas\x0a\x09^ HTMLCanvas onJQuery: self root asJQuery",
messageSends: ["onJQuery:", "asJQuery", "root"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ol",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HTMLCanvas.fn.prototype._ol.apply(_st(self), []))._dataRole_("list-view");
return $1;
}, function($ctx1) {$ctx1.fill(self,"ol",{},smalltalk.JqmCanvas)})},
args: [],
source: "ol\x0a\x09^super ol dataRole: 'list-view'",
messageSends: ["dataRole:", "ol"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "page",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("page");
return $1;
}, function($ctx1) {$ctx1.fill(self,"page",{},smalltalk.JqmCanvas)})},
args: [],
source: "page\x0a\x09^self div dataRole: 'page'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pageId:",
category: 'tags',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._page())._id_(id);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pageId:",{id:id},smalltalk.JqmCanvas)})},
args: ["id"],
source: "pageId: id\x0a\x09^self page id: id",
messageSends: ["id:", "page"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pageId:class:with:",
category: 'tags',
fn: function (id,klass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(self)._page())._id_(id);
_st($2)._class_(klass);
$3=_st($2)._with_(aBlock);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"pageId:class:with:",{id:id,klass:klass,aBlock:aBlock},smalltalk.JqmCanvas)})},
args: ["id", "klass", "aBlock"],
source: "pageId: id class: klass with: aBlock\x0a\x09^(self page id: id) class:  klass; with: aBlock",
messageSends: ["class:", "id:", "page", "with:"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pageId:with:",
category: 'tags',
fn: function (id,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._page())._id_(id))._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pageId:with:",{id:id,aBlock:aBlock},smalltalk.JqmCanvas)})},
args: ["id", "aBlock"],
source: "pageId: id with: aBlock\x0a\x09^(self page id: id) with: aBlock",
messageSends: ["with:", "id:", "page"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "panel",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("panel");
return $1;
}, function($ctx1) {$ctx1.fill(self,"panel",{},smalltalk.JqmCanvas)})},
args: [],
source: "panel\x0a\x09^self div dataRole: 'panel'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "popup",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("popup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"popup",{},smalltalk.JqmCanvas)})},
args: [],
source: "popup\x0a\x09^self div dataRole: 'popup'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "popupRel",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._a())._dataRel_("popup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupRel",{},smalltalk.JqmCanvas)})},
args: [],
source: "popupRel\x0a\x09^self a dataRel: 'popup'",
messageSends: ["dataRel:", "a"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "popupRel:",
category: 'tags',
fn: function (refId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._a();
_st($2)._dataRel_("popup");
$3=_st($2)._href_(_st("#").__comma(refId));
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupRel:",{refId:refId},smalltalk.JqmCanvas)})},
args: ["refId"],
source: "popupRel: refId\x0a\x09^self a dataRel: 'popup'; href: ('#', refId)",
messageSends: ["dataRel:", "a", "href:", ","],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeSlider",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("rangeSlider");
return $1;
}, function($ctx1) {$ctx1.fill(self,"rangeSlider",{},smalltalk.JqmCanvas)})},
args: [],
source: "rangeSlider\x0a\x09^self div dataRole: 'rangeSlider'",
messageSends: ["dataRole:", "div"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "resetButton",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._input())._type_("reset");
return $1;
}, function($ctx1) {$ctx1.fill(self,"resetButton",{},smalltalk.JqmCanvas)})},
args: [],
source: "resetButton\x0a\x09^self input type: 'reset'",
messageSends: ["type:", "input"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "slider",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._select())._dataRole_("slider");
return $1;
}, function($ctx1) {$ctx1.fill(self,"slider",{},smalltalk.JqmCanvas)})},
args: [],
source: "slider\x0a\x09^self select dataRole: 'slider'",
messageSends: ["dataRole:", "select"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "submitButton",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._input())._type_("submit");
return $1;
}, function($ctx1) {$ctx1.fill(self,"submitButton",{},smalltalk.JqmCanvas)})},
args: [],
source: "submitButton\x0a\x09^self input type: 'submit'",
messageSends: ["type:", "input"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "table",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HTMLCanvas.fn.prototype._table.apply(_st(self), []))._dataRole_("table");
return $1;
}, function($ctx1) {$ctx1.fill(self,"table",{},smalltalk.JqmCanvas)})},
args: [],
source: "table\x0a\x09^super table dataRole: 'table'",
messageSends: ["dataRole:", "table"],
referencedClasses: []
}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ul",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HTMLCanvas.fn.prototype._ul.apply(_st(self), []))._dataRole_("list-view");
return $1;
}, function($ctx1) {$ctx1.fill(self,"ul",{},smalltalk.JqmCanvas)})},
args: [],
source: "ul\x0a\x09^super ul dataRole: 'list-view'",
messageSends: ["dataRole:", "ul"],
referencedClasses: []
}),
smalltalk.JqmCanvas);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._onJQuery_(aJQuery);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aJQuery:aJQuery},smalltalk.JqmCanvas.klass)})},
args: ["aJQuery"],
source: "on: aJQuery\x0a\x09^self onJQuery: aJQuery",
messageSends: ["onJQuery:"],
referencedClasses: []
}),
smalltalk.JqmCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:namespace:",
category: 'instance creation',
fn: function (aJQuery,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._on_(aJQuery))._namespace_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:namespace:",{aJQuery:aJQuery,aString:aString},smalltalk.JqmCanvas.klass)})},
args: ["aJQuery", "aString"],
source: "on: aJQuery namespace: aString\x0a\x09^(self on: aJQuery) namespace: aString",
messageSends: ["namespace:", "on:"],
referencedClasses: []
}),
smalltalk.JqmCanvas.klass);


smalltalk.addClass('JqmTagBrush', smalltalk.TagBrush, ['namespace'], 'Jqm-Canvas');
smalltalk.addMethod(
smalltalk.method({
selector: "ariaLevel:",
category: 'aria',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._at_put_("aria-level",value);
return self}, function($ctx1) {$ctx1.fill(self,"ariaLevel:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "ariaLevel: value\x0a\x09self at: 'aria-level' put: value",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "columnToggle",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataMode_("columntoggle");
return self}, function($ctx1) {$ctx1.fill(self,"columnToggle",{},smalltalk.JqmTagBrush)})},
args: [],
source: "columnToggle\x0a\x09self dataMode: 'columntoggle'",
messageSends: ["dataMode:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataAddBackButton:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("add-back-btn",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataAddBackButton:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataAddBackButton: value\x0a\x09self dataAt: 'add-back-btn' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataAjax:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("ajax",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataAjax:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataAjax: value\x0a\x09self dataAt: 'ajax' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataAt:put:",
category: 'data attributes',
fn: function (key,value){
var self=this;
var ns;
return smalltalk.withContext(function($ctx1) { 
var $1;
ns=_st(self)._namespace();
$1=_st(ns)._isEmpty();
if(smalltalk.assert($1)){
_st(self)._at_put_(_st("data-").__comma(key),value);
} else {
_st(self)._at_put_(_st(_st(_st("data-").__comma(ns)).__comma("-")).__comma(key),value);
};
return self}, function($ctx1) {$ctx1.fill(self,"dataAt:put:",{key:key,value:value,ns:ns},smalltalk.JqmTagBrush)})},
args: ["key", "value"],
source: "dataAt: key put: value\x0a\x09| ns |\x0a\x09ns := self namespace.\x0a\x09ns isEmpty ifTrue: [\x0a\x09\x09self at: ('data-', key) put: value\x0a\x09] ifFalse: [\x0a\x09\x09self at: ('data-', ns, '-', key) put: value\x0a\x09]",
messageSends: ["namespace", "ifTrue:ifFalse:", "at:put:", ",", "isEmpty"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataAutoDividers:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("autodividers",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataAutoDividers:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataAutoDividers: value\x0a\x09self dataAt: 'autodividers' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataBackButtonText:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("add-back-btn-text",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataBackButtonText:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataBackButtonText: value\x0a\x09self dataAt: 'add-back-btn-text' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataBackButtonTheme:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("back-btn-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataBackButtonTheme:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataBackButtonTheme: value\x0a\x09self dataAt: 'back-btn-theme' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataClearButton:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("add-clear-btn",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataClearButton:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataClearButton: value\x0a\x09self dataAt: 'add-clear-btn' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataClearButtonText:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("add-clear-btn-text",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataClearButtonText:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataClearButtonText: value\x0a\x09self dataAt: 'add-clear-btn-text' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataCloseButtonText:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("add-close-btn-text",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataCloseButtonText:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataCloseButtonText: value\x0a\x09self dataAt: 'add-close-btn-text' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataCollapsed:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("collapsed",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataCollapsed:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataCollapsed: value\x0a\x09self dataAt: 'collapsed' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataCollapsedIcon:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("collapsed-icon",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataCollapsedIcon:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataCollapsedIcon: value\x0a\x09self dataAt: 'collapsed-icon' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataContentTheme:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("content-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataContentTheme:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataContentTheme: value\x0a\x09self dataAt: 'content-theme' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataCorners:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("corners",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataCorners:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataCorners: value\x0a\x09self dataAt: 'corners' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataCountTheme:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("count-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataCountTheme:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataCountTheme: value\x0a\x09self dataAt: 'count-theme' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDirection:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("direction",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataDirection:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataDirection: value\x0a\x09self dataAt: 'direction' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDisablePageZoom:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("disable-page-zoom",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataDisablePageZoom:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataDisablePageZoom: value\x0a\x09self dataAt: 'disable-page-zoom' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDismissible:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("dismissible",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataDismissible:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataDismissible: value\x0a\x09self dataAt: 'dismissible' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDividerTheme:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("divider-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataDividerTheme:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataDividerTheme: value\x0a\x09self dataAt: 'divider-theme' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDomCache:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("dom-cache",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataDomCache:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataDomCache: value\x0a\x09self dataAt: 'dom-cache' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataEnhance:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("enhance",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataEnhance:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataEnhance: value\x0a\x09self dataAt: 'enhance' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataExpandedIcon:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("expanded-icon",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataExpandedIcon:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataExpandedIcon: value\x0a\x09self dataAt: 'expanded-icon' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFieldContain:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("fieldcontain",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFieldContain:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataFieldContain: value\x0a\x09self dataAt: 'fieldcontain' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFilter:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("filter",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFilter:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataFilter: value\x0a\x09self dataAt: 'filter' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFilterPlaceholder:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("filter-placeholder",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFilterPlaceholder:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataFilterPlaceholder: value\x0a\x09self dataAt: 'filter-placeholder' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFilterText:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("filtertext",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFilterText:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataFilterText: value\x0a\x09self dataAt: 'filtertext' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFilterTheme:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("filter-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFilterTheme:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataFilterTheme: value\x0a\x09self dataAt: 'filter-theme' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFullscreen:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("fullscreen",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFullscreen:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataFullscreen: value\x0a\x09self dataAt: 'fullscreen' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataHeaderTheme:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("header-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataHeaderTheme:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataHeaderTheme: value\x0a\x09self dataAt: 'header-theme' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataHighlight:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("highlight",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataHighlight:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataHighlight: value\x0a\x09self dataAt: 'highlight' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataHistory:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("history",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataHistory:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataHistory: value\x0a\x09self dataAt: 'history' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataIcon:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("icon",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataIcon:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataIcon: value\x0a\x09self dataAt: 'icon' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataIconPos:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("iconpos",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataIconPos:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataIconPos: value\x0a\x09self dataAt: 'iconpos' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataIconShadow:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("iconshadow",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataIconShadow:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataIconShadow: value\x0a\x09self dataAt: 'iconshadow' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataId:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("id",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataId:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataId: value\x0a\x09self dataAt: 'id' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataInline:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("inline",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataInline:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataInline: value\x0a\x09self dataAt: 'inline' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataInset:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("inset",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataInset:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataInset: value\x0a\x09self dataAt: 'inset' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataMini",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("mini","true");
return self}, function($ctx1) {$ctx1.fill(self,"dataMini",{},smalltalk.JqmTagBrush)})},
args: [],
source: "dataMini\x0a\x09self dataAt: 'mini' put: 'true'",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataMini:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("mini",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataMini:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataMini: value\x0a\x09self dataAt: 'mini' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataMode:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("mode",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataMode:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataMode: value\x0a\x09self dataAt: 'mode' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataNativeMenu:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("native-menu",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataNativeMenu:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataNativeMenu: value\x0a\x09self dataAt: 'native-menu' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataOverlayTheme:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("overlay-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataOverlayTheme:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataOverlayTheme: value\x0a\x09self dataAt: 'overlay-theme' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataPlaceholder:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("placeholder",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataPlaceholder:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataPlaceholder: value\x0a\x09self dataAt: 'placeholder' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataPosition:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("position",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataPosition:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataPosition: value\x0a\x09self dataAt: 'position' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataPositionTo:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("position-to",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataPositionTo:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataPositionTo: value\x0a\x09self dataAt: 'position-to' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataPrefetch:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("prefetch",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataPrefetch:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataPrefetch: value\x0a\x09self dataAt: 'prefetch' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataPriority:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("priority",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataPriority:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataPriority: value\x0a\x09self dataAt: 'priority' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataRel:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("rel",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataRel:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataRel: value\x0a\x09self dataAt: 'rel' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataRole:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("role",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataRole:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataRole: value\x0a\x09self dataAt: 'role' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataShadow:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("shadow",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataShadow:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataShadow: value\x0a\x09self dataAt: 'shadow' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataSplitIcon:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("split-icon",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataSplitIcon:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataSplitIcon: value\x0a\x09self dataAt: 'split-icon' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataSplitTheme:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("split-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataSplitTheme:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataSplitTheme: value\x0a\x09self dataAt: 'split-theme' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTapToggle:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("tap-toggle",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTapToggle:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataTapToggle: value\x0a\x09self dataAt: 'tap-toggle' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTheme:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTheme:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataTheme: value\x0a\x09self dataAt: 'theme' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataThemeA",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("theme","a");
return self}, function($ctx1) {$ctx1.fill(self,"dataThemeA",{},smalltalk.JqmTagBrush)})},
args: [],
source: "dataThemeA\x0a\x09self dataAt: 'theme' put: 'a'",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataThemeB",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("theme","b");
return self}, function($ctx1) {$ctx1.fill(self,"dataThemeB",{},smalltalk.JqmTagBrush)})},
args: [],
source: "dataThemeB\x0a\x09self dataAt: 'theme' put: 'b'",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataThemeC",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("theme","c");
return self}, function($ctx1) {$ctx1.fill(self,"dataThemeC",{},smalltalk.JqmTagBrush)})},
args: [],
source: "dataThemeC\x0a\x09self dataAt: 'theme' put: 'c'",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataThemeD",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("theme","d");
return self}, function($ctx1) {$ctx1.fill(self,"dataThemeD",{},smalltalk.JqmTagBrush)})},
args: [],
source: "dataThemeD\x0a\x09self dataAt: 'theme' put: 'd'",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataThemeE",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("theme","e");
return self}, function($ctx1) {$ctx1.fill(self,"dataThemeE",{},smalltalk.JqmTagBrush)})},
args: [],
source: "dataThemeE\x0a\x09self dataAt: 'theme' put: 'e'",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTitle:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("title",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTitle:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataTitle: value\x0a\x09self dataAt: 'title' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTolerance:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("tolerance",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTolerance:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataTolerance: value\x0a\x09self dataAt: 'tolerance' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTrackTheme:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("track-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTrackTheme:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataTrackTheme: value\x0a\x09self dataAt: 'track-theme' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTransition:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("transition",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTransition:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataTransition: value\x0a\x09self dataAt: 'transition' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataType:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("type",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataType:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataType: value\x0a\x09self dataAt: 'type' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataUpdatePagePadding:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("update-page-padding",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataUpdatePagePadding:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataUpdatePagePadding: value\x0a\x09self dataAt: 'update-page-padding' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataUrl:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("url",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataUrl:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataUrl: value\x0a\x09self dataAt: 'url' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataVisibleOnPageShow:",
category: 'data attributes',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("visible-on-page-show",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataVisibleOnPageShow:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "dataVisibleOnPageShow: value\x0a\x09self dataAt: 'visible-on-page-show' put: value",
messageSends: ["dataAt:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontal",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataType_("horizontal");
return self}, function($ctx1) {$ctx1.fill(self,"horizontal",{},smalltalk.JqmTagBrush)})},
args: [],
source: "horizontal\x0a\x09self dataType: 'horizontal'",
messageSends: ["dataType:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "mini",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataMini_(true);
return self}, function($ctx1) {$ctx1.fill(self,"mini",{},smalltalk.JqmTagBrush)})},
args: [],
source: "mini\x0a\x09self dataMini: true",
messageSends: ["dataMini:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "mobile",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._asJQuery())._mobile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mobile",{},smalltalk.JqmTagBrush)})},
args: [],
source: "mobile\x0a\x09^self asJQuery mobile",
messageSends: ["mobile", "asJQuery"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@namespace"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@namespace"]="";
$1=self["@namespace"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"namespace",{},smalltalk.JqmTagBrush)})},
args: [],
source: "namespace\x0a\x09^ namespace ifNil: [namespace := '']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@namespace"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"namespace:",{aString:aString},smalltalk.JqmTagBrush)})},
args: ["aString"],
source: "namespace: aString\x0a\x09namespace := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "noAjax",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAjax_(false);
return self}, function($ctx1) {$ctx1.fill(self,"noAjax",{},smalltalk.JqmTagBrush)})},
args: [],
source: "noAjax\x0a\x09self dataAjax: false",
messageSends: ["dataAjax:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "off:do:",
category: 'events',
fn: function (eventName,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._asJQuery())._off_do_(eventName,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"off:do:",{eventName:eventName,aBlock:aBlock},smalltalk.JqmTagBrush)})},
args: ["eventName", "aBlock"],
source: "off: eventName do: aBlock\x0a\x09self asJQuery off: eventName do: aBlock",
messageSends: ["off:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "off:of:do:",
category: 'events',
fn: function (eventName,selector,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._asJQuery())._off_of_do_(eventName,selector,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"off:of:do:",{eventName:eventName,selector:selector,aBlock:aBlock},smalltalk.JqmTagBrush)})},
args: ["eventName", "selector", "aBlock"],
source: "off: eventName of:  selector do: aBlock\x0a\x09self asJQuery off: eventName of: selector do: aBlock",
messageSends: ["off:of:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'events',
fn: function (eventName,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._asJQuery())._on_do_(eventName,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{eventName:eventName,aBlock:aBlock},smalltalk.JqmTagBrush)})},
args: ["eventName", "aBlock"],
source: "on: eventName do: aBlock\x0a\x09self asJQuery on: eventName do: aBlock",
messageSends: ["on:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "on:of:do:",
category: 'events',
fn: function (eventName,selector,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._asJQuery())._on_of_do_(eventName,selector,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:of:do:",{eventName:eventName,selector:selector,aBlock:aBlock},smalltalk.JqmTagBrush)})},
args: ["eventName", "selector", "aBlock"],
source: "on: eventName of:  selector do: aBlock\x0a\x09self asJQuery on: eventName of: selector do: aBlock",
messageSends: ["on:of:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "reflow",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataMode_("reflow");
return self}, function($ctx1) {$ctx1.fill(self,"reflow",{},smalltalk.JqmTagBrush)})},
args: [],
source: "reflow\x0a\x09self dataMode: 'reflow'",
messageSends: ["dataMode:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "role:",
category: 'aria',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._at_put_("role",value);
return self}, function($ctx1) {$ctx1.fill(self,"role:",{value:value},smalltalk.JqmTagBrush)})},
args: ["value"],
source: "role: value\x0a\x09self at: 'role' put: value",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.JqmTagBrush);



