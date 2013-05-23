smalltalk.addPackage('Jqm-ToDo');
smalltalk.addClass('MobileToDo', smalltalk.Widget, ['storage', 'listPart'], 'Jqm-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "addItemText:",
fn: function (aString){
var self=this;
var newItem;
function $MobileToDoItem(){return smalltalk.MobileToDoItem||(typeof MobileToDoItem=="undefined"?nil:MobileToDoItem)}
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(_st("addItemText ").__comma(aString));
newItem=_st($MobileToDoItem())._new();
_st(newItem)._text_(aString);
_st(_st(self)._storage())._add_(newItem);
_st(_st("#taskDescription")._asJQuery())._val_("");
_st(self)._updateListPart();
return self}, function($ctx1) {$ctx1.fill(self,"addItemText:",{aString:aString,newItem:newItem},smalltalk.MobileToDo)})},
messageSends: ["log:", ",", "new", "text:", "add:", "storage", "val:", "asJQuery", "updateListPart"]}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $MobileToDoStorage(){return smalltalk.MobileToDoStorage||(typeof MobileToDoStorage=="undefined"?nil:MobileToDoStorage)}
return smalltalk.withContext(function($ctx1) { 
self["@storage"]=_st(_st($MobileToDoStorage())._new())._load();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MobileToDo)})},
messageSends: ["load", "new"]}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._storage())._items();
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},smalltalk.MobileToDo)})},
messageSends: ["items", "storage"]}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAllItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(console)._log_("removeAll");
$1=_st(self)._storage();
_st($1)._initItems();
$2=_st($1)._save();
_st(self)._updateListPart();
return self}, function($ctx1) {$ctx1.fill(self,"removeAllItems",{},smalltalk.MobileToDo)})},
messageSends: ["log:", "initItems", "storage", "save", "updateListPart"]}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "removeItemAt:",
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(console)._log_(_st("removeItemAt  ").__comma(anId));
_st(_st(self)._storage())._removeAt_ifAbsent_(anId,(function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(console)._log_(_st("Task not found: ").__comma(anId));
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._updateListPart();
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"removeItemAt:",{anId:anId},smalltalk.MobileToDo)})},
messageSends: ["log:", ",", "removeAt:ifAbsent:", "storage", "updateListPart"]}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAddDialogOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(html)._pageId_with_("add",(function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._header_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(html)._h2_("Enter a task");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(html)._content_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._fieldContain_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(_st(html)._label())._for_("taskDescription"))._with_("To do:");
$1=_st(html)._input();
_st($1)._type_("text");
_st($1)._id_("taskDescription");
$2=_st($1)._value_("");
return $2;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._buttonLabeled_to_id_("Add","main","addButton"))._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self)._addItemText_(_st(_st("#taskDescription")._asJQuery())._val());
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return _st(html)._buttonLabeled_to_id_("Cancel","main","cancel");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderAddDialogOn:",{html:html},smalltalk.MobileToDo)})},
messageSends: ["pageId:with:", "header:", "h2:", "content:", "fieldContain:", "with:", "for:", "label", "type:", "input", "id:", "value:", "onClick:", "addItemText:", "val", "asJQuery", "buttonLabeled:to:id:"]}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
fn: function (anItem,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._li();
_st($1)._dataIcon_("delete");
_st($1)._id_(_st(anItem)._id());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._a())._with_(_st(anItem)._text());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._removeItemAt_(_st(anItem)._id());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anItem:anItem,html:html},smalltalk.MobileToDo)})},
messageSends: ["onClick:", "removeItemAt:", "id", "dataIcon:", "li", "id:", "with:", "text", "a"]}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(html)._pageId_with_("main",(function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._header_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._h1_("ToDoList");
return _st(html)._dialogButtonLabeled_to_("Add","add");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
_st(html)._content_((function(){
return smalltalk.withContext(function($ctx3) {
self["@listPart"]=_st(_st(html)._ul())._id_("toDoList");
return _st(self["@listPart"])._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(self)._items())._do_((function(each){
return smalltalk.withContext(function($ctx5) {
return _st(self)._renderItem_on_(each,html);
}, function($ctx5) {$ctx5.fillBlock({each:each},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(html)._footer_((function(){
return smalltalk.withContext(function($ctx3) {
$1=_st(html)._button();
_st($1)._id_("removeAllButton");
_st($1)._dataIcon_("removeAll");
_st($1)._with_("Remove All");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self)._removeAllItems();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},smalltalk.MobileToDo)})},
messageSends: ["pageId:with:", "header:", "h1:", "dialogButtonLabeled:to:", "content:", "with:", "do:", "renderItem:on:", "items", "id:", "ul", "footer:", "button", "dataIcon:", "onClick:", "removeAllItems"]}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._renderMainOn_(html);
_st(self)._renderAddDialogOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MobileToDo)})},
messageSends: ["renderMainOn:", "renderAddDialogOn:"]}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
function $JqmCanvas(){return smalltalk.JqmCanvas||(typeof JqmCanvas=="undefined"?nil:JqmCanvas)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._renderOn_(_st($JqmCanvas())._onJQuery_(_st("body")._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.MobileToDo)})},
messageSends: ["renderOn:", "onJQuery:", "asJQuery"]}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "storage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@storage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"storage",{},smalltalk.MobileToDo)})},
messageSends: []}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "updateListPart",
fn: function (){
var self=this;
var jqElem;
return smalltalk.withContext(function($ctx1) { 
_st(self["@listPart"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._items())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(self)._renderItem_on_(each,html);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
jqElem=_st("#toDoList")._asJQuery();
_st(_st(jqElem)._listview())._listview_("refresh");
return self}, function($ctx1) {$ctx1.fill(self,"updateListPart",{jqElem:jqElem},smalltalk.MobileToDo)})},
messageSends: ["contents:", "do:", "renderItem:on:", "items", "asJQuery", "listview:", "listview"]}),
smalltalk.MobileToDo);


smalltalk.MobileToDo.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.Widget.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.MobileToDo.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.MobileToDo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isLoaded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@current"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLoaded",{},smalltalk.MobileToDo.klass)})},
messageSends: ["notNil"]}),
smalltalk.MobileToDo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@current"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@current"]=_st(self)._new();
self["@current"];
} else {
$1;
};
_st(_st(self)._current())._start();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.MobileToDo.klass)})},
messageSends: ["ifNil:", "new", "start", "current"]}),
smalltalk.MobileToDo.klass);


smalltalk.addClass('MobileToDoItem', smalltalk.Object, ['id', 'text', 'isDone'], 'Jqm-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@id"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@id"]=_st(self)._newUuid();
$1=self["@id"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.MobileToDoItem)})},
messageSends: ["ifNil:", "newUuid"]}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "id:",
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@id"]=anId;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{anId:anId},smalltalk.MobileToDoItem)})},
messageSends: []}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "isDone",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@isDone"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@isDone"]=false;
$1=self["@isDone"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isDone",{},smalltalk.MobileToDoItem)})},
messageSends: ["ifNil:"]}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "isDone:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isDone"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"isDone:",{aBoolean:aBoolean},smalltalk.MobileToDoItem)})},
messageSends: []}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "newUuid",
fn: function (){
var self=this;
var randomGen,partGen;
return smalltalk.withContext(function($ctx1) { 
var $1;
randomGen=(function(){
return smalltalk.withContext(function($ctx2) {
return _st("0123456789abcde")._atRandom();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
partGen=(function(){
return smalltalk.withContext(function($ctx2) {
return _st("    ")._collect_((function(e){
return smalltalk.withContext(function($ctx3) {
return _st(randomGen)._value();
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
$1=_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(partGen)._value()).__comma(_st(partGen)._value())).__comma("-")).__comma(_st(partGen)._value())).__comma("-")).__comma(_st(partGen)._value())).__comma("-")).__comma(_st(partGen)._value())).__comma("-")).__comma(_st(partGen)._value())).__comma(_st(partGen)._value())).__comma(_st(partGen)._value());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newUuid",{randomGen:randomGen,partGen:partGen},smalltalk.MobileToDoItem)})},
messageSends: ["atRandom", "collect:", "value", ","]}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("aToDoItem:(");
_st(aStream)._nextPutAll_(_st(self)._id());
_st(aStream)._space();
_st(aStream)._nextPutAll_(_st(self)._text());
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.MobileToDoItem)})},
messageSends: ["nextPutAll:", "id", "space", "text"]}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@text"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@text"]="";
$1=self["@text"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.MobileToDoItem)})},
messageSends: ["ifNil:"]}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.MobileToDoItem)})},
messageSends: []}),
smalltalk.MobileToDoItem);


smalltalk.addMethod(
smalltalk.method({
selector: "fromDictionary:",
fn: function (aDict){
var self=this;
var todo;
return smalltalk.withContext(function($ctx1) { 
var $1;
todo=_st(self)._new();
_st(todo)._id_(_st(aDict)._at_ifAbsent_("id",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st(todo)._text_(_st(aDict)._at_ifAbsent_("text",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st(todo)._isDone_(_st(aDict)._at_ifAbsent_("isDone",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$1=todo;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:",{aDict:aDict,todo:todo},smalltalk.MobileToDoItem.klass)})},
messageSends: ["new", "id:", "at:ifAbsent:", "text:", "isDone:"]}),
smalltalk.MobileToDoItem.klass);


smalltalk.addClass('MobileToDoStorage', smalltalk.Object, ['storage', 'items'], 'Jqm-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._items())._add_(anItem);
_st(self)._save();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anItem:anItem},smalltalk.MobileToDoStorage)})},
messageSends: ["add:", "items", "save"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._at_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anInteger:anInteger},smalltalk.MobileToDoStorage)})},
messageSends: ["at:", "items"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (anInteger,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._items())._at_put_(anInteger,anObject);
_st(self)._save();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anInteger:anInteger,anObject:anObject},smalltalk.MobileToDoStorage)})},
messageSends: ["at:put:", "items", "save"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._collect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},smalltalk.MobileToDoStorage)})},
messageSends: ["collect:", "items"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,aNoneBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._detect_ifNone_(aBlock,aNoneBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,aNoneBlock:aNoneBlock},smalltalk.MobileToDoStorage)})},
messageSends: ["detect:ifNone:", "items"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.MobileToDoStorage)})},
messageSends: ["do:", "items"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._indexOf_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anInteger:anInteger},smalltalk.MobileToDoStorage)})},
messageSends: ["indexOf:", "items"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initItems",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@items"]=_st($Array())._new();
$1=self["@items"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initItems",{},smalltalk.MobileToDoStorage)})},
messageSends: ["new"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@storage"]=nil;
_st(self)._initItems();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MobileToDoStorage)})},
messageSends: ["initItems"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@items"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@items"]=_st(self)._initItems();
$1=self["@items"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},smalltalk.MobileToDoStorage)})},
messageSends: ["ifNil:", "initItems"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "load",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._loadItems();
return self}, function($ctx1) {$ctx1.fill(self,"load",{},smalltalk.MobileToDoStorage)})},
messageSends: ["loadItems"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "loadItems",
fn: function (){
var self=this;
var jsonStr,loadedJson;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $MobileToDoItem(){return smalltalk.MobileToDoItem||(typeof MobileToDoItem=="undefined"?nil:MobileToDoItem)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
jsonStr=_st(_st(self)._storage())._getItem_("MobileToDoList");
$1=jsonStr;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
_st($2)._initItems();
$3=_st($2)._saveItems();
$3;
$4=[];
return $4;
} else {
$1;
};
loadedJson=_st($JSON())._parse_(jsonStr);
$5=_st(loadedJson)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($MobileToDoItem())._fromDictionary_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $5;
}, function($ctx1) {$ctx1.fill(self,"loadItems",{jsonStr:jsonStr,loadedJson:loadedJson},smalltalk.MobileToDoStorage)})},
messageSends: ["getItem:", "storage", "ifNil:", "initItems", "saveItems", "parse:", "collect:", "fromDictionary:"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._items())._remove_(anItem);
_st(self)._save();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anItem:anItem},smalltalk.MobileToDoStorage)})},
messageSends: ["remove:", "items", "save"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (anItem,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._items())._remove_ifAbsent_(anItem,aBlock);
_st(self)._save();
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anItem:anItem,aBlock:aBlock},smalltalk.MobileToDoStorage)})},
messageSends: ["remove:ifAbsent:", "items", "save"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAt:",
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._removeAt_ifAbsent_(anId,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeAt:",{anId:anId},smalltalk.MobileToDoStorage)})},
messageSends: ["removeAt:ifAbsent:"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAt:ifAbsent:",
fn: function (anId,aBlock){
var self=this;
var found;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
found=_st(self)._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._id()).__eq(anId);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value();
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._remove_(found);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"removeAt:ifAbsent:",{anId:anId,aBlock:aBlock,found:found},smalltalk.MobileToDoStorage)})},
messageSends: ["detect:ifNone:", "=", "id", "value", "remove:"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "save",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._saveItems();
return self}, function($ctx1) {$ctx1.fill(self,"save",{},smalltalk.MobileToDoStorage)})},
messageSends: ["saveItems"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "saveItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._storage())._setItem_value_("MobileToDoList",_st(_st(self)._items())._asJSONString());
$1=_st(self)._items();
return $1;
}, function($ctx1) {$ctx1.fill(self,"saveItems",{},smalltalk.MobileToDoStorage)})},
messageSends: ["setItem:value:", "asJSONString", "items", "storage"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._select_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock},smalltalk.MobileToDoStorage)})},
messageSends: ["select:", "items"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.MobileToDoStorage)})},
messageSends: ["size", "items"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "storage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@storage"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@storage"]=localStorage;
$1=self["@storage"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"storage",{},smalltalk.MobileToDoStorage)})},
messageSends: ["ifNil:"]}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "storage:",
fn: function (aStorage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@storage"]=aStorage;
return self}, function($ctx1) {$ctx1.fill(self,"storage:",{aStorage:aStorage},smalltalk.MobileToDoStorage)})},
messageSends: []}),
smalltalk.MobileToDoStorage);



