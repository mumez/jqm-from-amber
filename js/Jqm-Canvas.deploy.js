smalltalk.addPackage('Jqm-Canvas');
smalltalk.addClass('JqmCanvas', smalltalk.HTMLCanvas, ['namespace'], 'Jqm-Canvas');
smalltalk.addMethod(
smalltalk.method({
selector: "backButtonTo:",
fn: function (refId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._backRel())._href_(_st("#").__comma(refId));
return $1;
}, function($ctx1) {$ctx1.fill(self,"backButtonTo:",{refId:refId},smalltalk.JqmCanvas)})},
messageSends: ["href:", ",", "backRel"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "backRel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._a())._dataRel_("back");
return $1;
}, function($ctx1) {$ctx1.fill(self,"backRel",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRel:", "a"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "button",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._a())._dataRole_("button");
return $1;
}, function($ctx1) {$ctx1.fill(self,"button",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "a"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonLabeled:to:",
fn: function (label,refId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._buttonTo_(refId))._with_(label);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buttonLabeled:to:",{label:label,refId:refId},smalltalk.JqmCanvas)})},
messageSends: ["with:", "buttonTo:"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonLabeled:to:id:",
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
messageSends: ["id:", "buttonTo:", "with:"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonTo:",
fn: function (refId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._button())._href_(_st("#").__comma(refId));
return $1;
}, function($ctx1) {$ctx1.fill(self,"buttonTo:",{refId:refId},smalltalk.JqmCanvas)})},
messageSends: ["href:", ",", "button"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "closeButton",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._button())._dataRel_("close");
return $1;
}, function($ctx1) {$ctx1.fill(self,"closeButton",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRel:", "button"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "collapsible",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("collapsible");
return $1;
}, function($ctx1) {$ctx1.fill(self,"collapsible",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "collapsibleSet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("collapsible-set");
return $1;
}, function($ctx1) {$ctx1.fill(self,"collapsibleSet",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "content",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("content");
return $1;
}, function($ctx1) {$ctx1.fill(self,"content",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "content:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._content())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"content:",{aBlock:aBlock},smalltalk.JqmCanvas)})},
messageSends: ["with:", "content"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "controlGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("controlgroup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlGroup",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "controlGroup:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._controlGroup())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlGroup:",{aBlock:aBlock},smalltalk.JqmCanvas)})},
messageSends: ["with:", "controlGroup"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dialogButtonLabeled:to:",
fn: function (label,refId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._dialogButtonTo_(refId))._with_(label);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dialogButtonLabeled:to:",{label:label,refId:refId},smalltalk.JqmCanvas)})},
messageSends: ["with:", "dialogButtonTo:"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dialogButtonTo:",
fn: function (refId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._dialogRel())._href_(_st("#").__comma(refId));
return $1;
}, function($ctx1) {$ctx1.fill(self,"dialogButtonTo:",{refId:refId},smalltalk.JqmCanvas)})},
messageSends: ["href:", ",", "dialogRel"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dialogRel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._a())._dataRel_("dialog");
return $1;
}, function($ctx1) {$ctx1.fill(self,"dialogRel",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRel:", "a"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "externalRel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._a())._dataRel_("external");
return $1;
}, function($ctx1) {$ctx1.fill(self,"externalRel",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRel:", "a"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "externalRel:",
fn: function (url){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._externalRel())._href_(url);
return $1;
}, function($ctx1) {$ctx1.fill(self,"externalRel:",{url:url},smalltalk.JqmCanvas)})},
messageSends: ["href:", "externalRel"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fieldContain",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("fieldcontain");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fieldContain",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fieldContain:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._fieldContain())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fieldContain:",{aBlock:aBlock},smalltalk.JqmCanvas)})},
messageSends: ["with:", "fieldContain"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "footer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("footer");
return $1;
}, function($ctx1) {$ctx1.fill(self,"footer",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "footer:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._footer())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"footer:",{aBlock:aBlock},smalltalk.JqmCanvas)})},
messageSends: ["with:", "footer"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "header",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("header");
return $1;
}, function($ctx1) {$ctx1.fill(self,"header",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "header:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._header())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"header:",{aBlock:aBlock},smalltalk.JqmCanvas)})},
messageSends: ["with:", "header"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "listDivider",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._li())._dataRole_("list-divider");
return $1;
}, function($ctx1) {$ctx1.fill(self,"listDivider",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "li"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "mobile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._root())._mobile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mobile",{},smalltalk.JqmCanvas)})},
messageSends: ["mobile", "root"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace",
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
messageSends: ["ifNil:"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@namespace"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"namespace:",{aString:aString},smalltalk.JqmCanvas)})},
messageSends: []}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "navbar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("navbar");
return $1;
}, function($ctx1) {$ctx1.fill(self,"navbar",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "newTag:",
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
messageSends: ["fromString:canvas:", "namespace:", "namespace"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "normalCanvas",
fn: function (){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HTMLCanvas())._onJQuery_(_st(_st(self)._root())._asJQuery());
return $1;
}, function($ctx1) {$ctx1.fill(self,"normalCanvas",{},smalltalk.JqmCanvas)})},
messageSends: ["onJQuery:", "asJQuery", "root"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HTMLCanvas.fn.prototype._ol.apply(_st(self), []))._dataRole_("list-view");
return $1;
}, function($ctx1) {$ctx1.fill(self,"ol",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "ol"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "page",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("page");
return $1;
}, function($ctx1) {$ctx1.fill(self,"page",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pageId:",
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._page())._id_(id);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pageId:",{id:id},smalltalk.JqmCanvas)})},
messageSends: ["id:", "page"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pageId:with:",
fn: function (id,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._pageId_(id))._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pageId:with:",{id:id,aBlock:aBlock},smalltalk.JqmCanvas)})},
messageSends: ["with:", "pageId:"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "panel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("panel");
return $1;
}, function($ctx1) {$ctx1.fill(self,"panel",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "popup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("popup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"popup",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "popupRel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._a())._dataRel_("popup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupRel",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRel:", "a"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "popupRel:",
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
messageSends: ["dataRel:", "a", "href:", ","]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeSlider",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._div())._dataRole_("rangeSlider");
return $1;
}, function($ctx1) {$ctx1.fill(self,"rangeSlider",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "div"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "resetButton",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._input())._type_("reset");
return $1;
}, function($ctx1) {$ctx1.fill(self,"resetButton",{},smalltalk.JqmCanvas)})},
messageSends: ["type:", "input"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "slider",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._select())._dataRole_("slider");
return $1;
}, function($ctx1) {$ctx1.fill(self,"slider",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "select"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "submitButton",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._input())._type_("submit");
return $1;
}, function($ctx1) {$ctx1.fill(self,"submitButton",{},smalltalk.JqmCanvas)})},
messageSends: ["type:", "input"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "table",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HTMLCanvas.fn.prototype._table.apply(_st(self), []))._dataRole_("table");
return $1;
}, function($ctx1) {$ctx1.fill(self,"table",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "table"]}),
smalltalk.JqmCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ul",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HTMLCanvas.fn.prototype._ul.apply(_st(self), []))._dataRole_("list-view");
return $1;
}, function($ctx1) {$ctx1.fill(self,"ul",{},smalltalk.JqmCanvas)})},
messageSends: ["dataRole:", "ul"]}),
smalltalk.JqmCanvas);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._onJQuery_(aJQuery);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aJQuery:aJQuery},smalltalk.JqmCanvas.klass)})},
messageSends: ["onJQuery:"]}),
smalltalk.JqmCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:namespace:",
fn: function (aJQuery,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._on_(aJQuery))._namespace_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:namespace:",{aJQuery:aJQuery,aString:aString},smalltalk.JqmCanvas.klass)})},
messageSends: ["namespace:", "on:"]}),
smalltalk.JqmCanvas.klass);


smalltalk.addClass('JqmTagBrush', smalltalk.TagBrush, ['namespace'], 'Jqm-Canvas');
smalltalk.addMethod(
smalltalk.method({
selector: "columnToggle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataMode_("columntoggle");
return self}, function($ctx1) {$ctx1.fill(self,"columnToggle",{},smalltalk.JqmTagBrush)})},
messageSends: ["dataMode:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataAddBackButton:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("add-back-btn",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataAddBackButton:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataAjax:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("ajax",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataAjax:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataAt:put:",
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
messageSends: ["namespace", "ifTrue:ifFalse:", "at:put:", ",", "isEmpty"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataAutoDividers:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("autodividers",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataAutoDividers:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataBackButtonText:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("add-back-btn-text",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataBackButtonText:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataBackButtonTheme:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("back-btn-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataBackButtonTheme:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataClearButton:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("add-clear-btn",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataClearButton:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataClearButtonText:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("add-clear-btn-text",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataClearButtonText:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataCloseButtonText:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("add-close-btn-text",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataCloseButtonText:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataCollapsed:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("collapsed",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataCollapsed:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataCollapsedIcon:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("collapsed-icon",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataCollapsedIcon:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataContentTheme:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("content-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataContentTheme:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataCorners:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("corners",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataCorners:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataCountTheme:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("count-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataCountTheme:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDirection:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("direction",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataDirection:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDisablePageZoom:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("disable-page-zoom",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataDisablePageZoom:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDismissible:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("dismissible",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataDismissible:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDividerTheme:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("divider-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataDividerTheme:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDomCache:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("dom-cache",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataDomCache:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataEnhance:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("enhance",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataEnhance:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataExpandedIcon:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("expanded-icon",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataExpandedIcon:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFieldContain:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("fieldcontain",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFieldContain:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFilter:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("filter",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFilter:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFilterPlaceholder:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("filter-placeholder",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFilterPlaceholder:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFilterText:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("filtertext",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFilterText:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFilterTheme:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("filter-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFilterTheme:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFullscreen:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("fullscreen",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataFullscreen:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataHeaderTheme:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("header-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataHeaderTheme:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataHighlight:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("highlight",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataHighlight:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataHistory:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("history",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataHistory:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataIcon:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("icon",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataIcon:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataIconPos:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("iconpos",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataIconPos:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataIconShadow:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("iconshadow",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataIconShadow:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataId:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("id",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataId:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataInline:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("inline",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataInline:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataInset:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("inset",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataInset:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataMini:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("mini",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataMini:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataMode:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("mode",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataMode:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataNativeMenu:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("native-menu",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataNativeMenu:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataOverlayTheme:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("overlay-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataOverlayTheme:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataPlaceholder:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("placeholder",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataPlaceholder:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataPosition:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("position",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataPosition:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataPositionTo:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("position-to",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataPositionTo:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataPrefetch:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("prefetch",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataPrefetch:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataPriority:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("priority",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataPriority:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataRel:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("rel",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataRel:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataRole:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("role",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataRole:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataShadow:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("shadow",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataShadow:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataSplitIcon:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("split-icon",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataSplitIcon:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataSplitTheme:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("split-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataSplitTheme:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTapToggle:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("tap-toggle",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTapToggle:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTheme:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTheme:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTitle:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("title",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTitle:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTolerance:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("tolerance",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTolerance:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTrackTheme:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("track-theme",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTrackTheme:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTransition:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("transition",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataTransition:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataType:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("type",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataType:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataUpdatePagePadding:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("update-page-padding",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataUpdatePagePadding:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataUrl:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("url",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataUrl:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "dataVisibleOnPageShow:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAt_put_("visible-on-page-show",value);
return self}, function($ctx1) {$ctx1.fill(self,"dataVisibleOnPageShow:",{value:value},smalltalk.JqmTagBrush)})},
messageSends: ["dataAt:put:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataType_("horizontal");
return self}, function($ctx1) {$ctx1.fill(self,"horizontal",{},smalltalk.JqmTagBrush)})},
messageSends: ["dataType:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "mini",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataMini_(true);
return self}, function($ctx1) {$ctx1.fill(self,"mini",{},smalltalk.JqmTagBrush)})},
messageSends: ["dataMini:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "mobile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._asJQuery())._mobile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mobile",{},smalltalk.JqmTagBrush)})},
messageSends: ["mobile", "asJQuery"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace",
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
messageSends: ["ifNil:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@namespace"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"namespace:",{aString:aString},smalltalk.JqmTagBrush)})},
messageSends: []}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "noAjax",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataAjax_(false);
return self}, function($ctx1) {$ctx1.fill(self,"noAjax",{},smalltalk.JqmTagBrush)})},
messageSends: ["dataAjax:"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "off:do:",
fn: function (eventName,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._asJQuery())._off_do_(eventName,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"off:do:",{eventName:eventName,aBlock:aBlock},smalltalk.JqmTagBrush)})},
messageSends: ["off:do:", "asJQuery"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "off:of:do:",
fn: function (eventName,selector,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._asJQuery())._off_of_do_(eventName,selector,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"off:of:do:",{eventName:eventName,selector:selector,aBlock:aBlock},smalltalk.JqmTagBrush)})},
messageSends: ["off:of:do:", "asJQuery"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
fn: function (eventName,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._asJQuery())._on_do_(eventName,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{eventName:eventName,aBlock:aBlock},smalltalk.JqmTagBrush)})},
messageSends: ["on:do:", "asJQuery"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "on:of:do:",
fn: function (eventName,selector,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._asJQuery())._on_of_do_(eventName,selector,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:of:do:",{eventName:eventName,selector:selector,aBlock:aBlock},smalltalk.JqmTagBrush)})},
messageSends: ["on:of:do:", "asJQuery"]}),
smalltalk.JqmTagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "reflow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._dataMode_("reflow");
return self}, function($ctx1) {$ctx1.fill(self,"reflow",{},smalltalk.JqmTagBrush)})},
messageSends: ["dataMode:"]}),
smalltalk.JqmTagBrush);



