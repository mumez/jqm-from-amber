smalltalk.addPackage('Jqm-ToDo');
smalltalk.addClass('MobileToDo', smalltalk.Widget, ['storage', 'listPart'], 'Jqm-ToDo');
smalltalk.MobileToDo.comment="MobileToDo main"
smalltalk.addMethod(
smalltalk.method({
selector: "addItemText:",
category: 'actions',
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
args: ["aString"],
source: "addItemText: aString\x0a\x09| newItem |\x0a\x09console log: 'addItemText ', aString.\x0a\x09newItem := MobileToDoItem new.\x0a\x09newItem text: aString.\x0a\x09self storage add: newItem.\x0a\x09'#taskDescription' asJQuery val: ''.\x0a\x09self updateListPart",
messageSends: ["log:", ",", "new", "text:", "add:", "storage", "val:", "asJQuery", "updateListPart"],
referencedClasses: ["MobileToDoItem"]
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@storage"]=_st(_st(_st(self)._storageClass())._new())._load();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MobileToDo)})},
args: [],
source: "initialize\x0a\x09storage := self storageClass new load",
messageSends: ["load", "new", "storageClass"],
referencedClasses: []
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._storage())._items();
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},smalltalk.MobileToDo)})},
args: [],
source: "items\x0a\x09^self storage items",
messageSends: ["items", "storage"],
referencedClasses: []
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAllItems",
category: 'actions',
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
args: [],
source: "removeAllItems\x0a\x09console log: 'removeAll'.\x0a\x09self storage initItems; save.\x0a\x09self updateListPart",
messageSends: ["log:", "initItems", "storage", "save", "updateListPart"],
referencedClasses: []
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "removeItemAt:",
category: 'actions',
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
args: ["anId"],
source: "removeItemAt: anId\x0a\x09console log: 'removeItemAt  ', anId.\x0a\x09self storage removeAt: anId ifAbsent: [^ console log: 'Task not found: ', anId].\x0a\x09self updateListPart",
messageSends: ["log:", ",", "removeAt:ifAbsent:", "storage", "updateListPart"],
referencedClasses: []
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAddDialogOn:",
category: 'rendering',
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
args: ["html"],
source: "renderAddDialogOn: html\x0a\x09html pageId: 'add' with: [\x0a\x09\x09html header: [html h2: 'Enter a task'].\x0a\x09\x09html content: [\x0a\x09\x09\x09html fieldContain: [\x0a\x09\x09\x09\x09\x09(html label for: 'taskDescription') with: 'To do:'.\x0a\x09\x09\x09\x09\x09html input type: 'text'; id: 'taskDescription'; value: ''.\x0a\x09\x09\x09].\x0a\x09\x09\x09(html buttonLabeled: 'Add' to: 'main' id: 'addButton') onClick: [self addItemText: '#taskDescription' asJQuery val].\x0a\x09\x09\x09html buttonLabeled: 'Cancel' to: 'main' id: 'cancel'.\x0a\x09\x09]\x0a\x09]",
messageSends: ["pageId:with:", "header:", "h2:", "content:", "fieldContain:", "with:", "for:", "label", "type:", "input", "id:", "value:", "onClick:", "addItemText:", "val", "asJQuery", "buttonLabeled:to:id:"],
referencedClasses: []
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
category: 'rendering',
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
args: ["anItem", "html"],
source: "renderItem: anItem on: html\x0a\x09(html li dataIcon: 'delete';\x0a\x09\x09id: anItem id;\x0a\x09\x09with: [html a with: anItem text]) onClick: [self removeItemAt: anItem id]",
messageSends: ["onClick:", "removeItemAt:", "id", "dataIcon:", "li", "id:", "with:", "text", "a"],
referencedClasses: []
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
category: 'rendering',
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
args: ["html"],
source: "renderMainOn: html\x0a\x09html pageId: 'main' with: [\x0a\x09\x09html header: [\x0a\x09\x09\x09html h1: 'ToDoList'.\x0a\x09\x09\x09html dialogButtonLabeled: 'Add' to: 'add'.\x0a\x09\x09].\x0a\x09\x09html content: [\x0a\x09\x09\x09(listPart := html ul id: 'toDoList') with: [\x0a\x09\x09\x09\x09self items do: [:each | self renderItem: each on: html]\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09\x09html footer: [\x0a\x09\x09\x09html button id: 'removeAllButton'; dataIcon: 'removeAll'; with: 'Remove All'; onClick: [\x0a\x09\x09\x09\x09self removeAllItems.\x0a\x09\x09\x09]\x0a\x09\x09]\x0a\x09]",
messageSends: ["pageId:with:", "header:", "h1:", "dialogButtonLabeled:to:", "content:", "with:", "do:", "renderItem:on:", "items", "id:", "ul", "footer:", "button", "dataIcon:", "onClick:", "removeAllItems"],
referencedClasses: []
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._renderMainOn_(html);
_st(self)._renderAddDialogOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MobileToDo)})},
args: ["html"],
source: "renderOn: html\x0a\x09self renderMainOn: html.\x0a\x09self renderAddDialogOn: html",
messageSends: ["renderMainOn:", "renderAddDialogOn:"],
referencedClasses: []
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
category: 'opening',
fn: function (){
var self=this;
function $JqmCanvas(){return smalltalk.JqmCanvas||(typeof JqmCanvas=="undefined"?nil:JqmCanvas)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._renderOn_(_st($JqmCanvas())._onJQuery_(_st("body")._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.MobileToDo)})},
args: [],
source: "start\x0a\x09\x0a\x09self renderOn: (JqmCanvas onJQuery: 'body' asJQuery)",
messageSends: ["renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["JqmCanvas"]
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "storage",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@storage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"storage",{},smalltalk.MobileToDo)})},
args: [],
source: "storage\x0a\x09^storage",
messageSends: [],
referencedClasses: []
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "storageClass",
category: 'factory',
fn: function (){
var self=this;
function $MobileToDoStorage(){return smalltalk.MobileToDoStorage||(typeof MobileToDoStorage=="undefined"?nil:MobileToDoStorage)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$MobileToDoStorage();
return $1;
}, function($ctx1) {$ctx1.fill(self,"storageClass",{},smalltalk.MobileToDo)})},
args: [],
source: "storageClass\x0a\x09^ MobileToDoStorage",
messageSends: [],
referencedClasses: ["MobileToDoStorage"]
}),
smalltalk.MobileToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "updateListPart",
category: 'updating',
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
args: [],
source: "updateListPart\x0a\x09| jqElem |\x0a\x09\x0a\x09listPart contents: [:html |\x0a\x09\x09self items do: [:each | self renderItem: each on: html]\x0a\x09].\x0a\x09\x0a\x09jqElem := '#toDoList' asJQuery.\x09\x0a\x09jqElem listview listview: 'refresh'",
messageSends: ["contents:", "do:", "renderItem:on:", "items", "asJQuery", "listview:", "listview"],
referencedClasses: []
}),
smalltalk.MobileToDo);


smalltalk.MobileToDo.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
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
args: [],
source: "current\x0a\x09^ current ifNil: [current := super new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.MobileToDo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "main",
category: 'opening',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._current())._start();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.MobileToDo.klass)})},
args: [],
source: "main\x0a\x09self current start\x0a\x09\x0a\x09\x0a\x09",
messageSends: ["start", "current"],
referencedClasses: []
}),
smalltalk.MobileToDo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "updateAfterOpen",
category: 'opening',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._current())._updateListPart();
return self}, function($ctx1) {$ctx1.fill(self,"updateAfterOpen",{},smalltalk.MobileToDo.klass)})},
args: [],
source: "updateAfterOpen\x0a\x09self current updateListPart",
messageSends: ["updateListPart", "current"],
referencedClasses: []
}),
smalltalk.MobileToDo.klass);


smalltalk.addClass('MobileToDoItem', smalltalk.Object, ['id', 'text', 'isDone'], 'Jqm-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
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
args: [],
source: "id\x0a\x09^id ifNil: [id := self newUuid]",
messageSends: ["ifNil:", "newUuid"],
referencedClasses: []
}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "id:",
category: 'accessing',
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@id"]=anId;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{anId:anId},smalltalk.MobileToDoItem)})},
args: ["anId"],
source: "id: anId\x0a\x09id := anId",
messageSends: [],
referencedClasses: []
}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@id"]=_st(self)._newUuid();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MobileToDoItem)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09id := self newUuid",
messageSends: ["initialize", "newUuid"],
referencedClasses: []
}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "isDone",
category: 'accessing',
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
args: [],
source: "isDone\x0a\x09^ isDone ifNil: [isDone := false]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "isDone:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isDone"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"isDone:",{aBoolean:aBoolean},smalltalk.MobileToDoItem)})},
args: ["aBoolean"],
source: "isDone: aBoolean\x0a\x09 isDone := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "newUuid",
category: 'private',
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
args: [],
source: "newUuid\x0a\x09| randomGen partGen |\x0a\x09randomGen :=['0123456789abcde' atRandom].\x0a\x09partGen := [('    ') collect: [:e | randomGen value]].\x0a\x0a\x09^partGen value, partGen value, '-', partGen value, '-', partGen value, '-', partGen value, '-', partGen value, partGen value, partGen value",
messageSends: ["atRandom", "collect:", "value", ","],
referencedClasses: []
}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'private',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("aToDoItem:(");
_st(aStream)._nextPutAll_(_st(self)._id());
_st(aStream)._space();
_st(aStream)._nextPutAll_(_st(self)._text());
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.MobileToDoItem)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'aToDoItem:('.\x0a\x09aStream nextPutAll: self id.\x0a\x09aStream space.\x0a\x09aStream nextPutAll: self text.\x0a\x09aStream nextPutAll: ')'",
messageSends: ["nextPutAll:", "id", "space", "text"],
referencedClasses: []
}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
category: 'accessing',
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
args: [],
source: "text\x0a\x09^ text ifNil: [text := '']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MobileToDoItem);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.MobileToDoItem)})},
args: ["aString"],
source: "text: aString\x0a\x09text := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MobileToDoItem);


smalltalk.addMethod(
smalltalk.method({
selector: "fromDictionary:",
category: 'instance creation',
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
args: ["aDict"],
source: "fromDictionary: aDict\x0a\x09| todo |\x0a\x09todo := self new.\x0a\x09todo id: (aDict at: 'id' ifAbsent: []).\x0a\x09todo text: (aDict at: 'text' ifAbsent:[]).\x0a\x09todo isDone: (aDict at: 'isDone' ifAbsent:[]).\x0a\x09^ todo",
messageSends: ["new", "id:", "at:ifAbsent:", "text:", "isDone:"],
referencedClasses: []
}),
smalltalk.MobileToDoItem.klass);


smalltalk.addClass('MobileToDoStorage', smalltalk.Object, ['storage', 'items'], 'Jqm-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'add/remove',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._items())._add_(anItem);
_st(self)._save();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anItem:anItem},smalltalk.MobileToDoStorage)})},
args: ["anItem"],
source: "add: anItem\x0a\x09self items add: anItem.\x0a\x09self save\x0a\x09",
messageSends: ["add:", "items", "save"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._at_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anInteger:anInteger},smalltalk.MobileToDoStorage)})},
args: ["anInteger"],
source: "at: anInteger\x0a\x09^self items at: anInteger",
messageSends: ["at:", "items"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anInteger,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._items())._at_put_(anInteger,anObject);
_st(self)._save();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anInteger:anInteger,anObject:anObject},smalltalk.MobileToDoStorage)})},
args: ["anInteger", "anObject"],
source: "at: anInteger put: anObject\x0a\x09self items at: anInteger put: anObject.\x0a\x09self save",
messageSends: ["at:put:", "items", "save"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
category: 'enumeration',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._collect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},smalltalk.MobileToDoStorage)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09^self items collect: aBlock",
messageSends: ["collect:", "items"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultStorage",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=localStorage;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultStorage",{},smalltalk.MobileToDoStorage)})},
args: [],
source: "defaultStorage\x0a\x09^ localStorage",
messageSends: [],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumeration',
fn: function (aBlock,aNoneBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._detect_ifNone_(aBlock,aNoneBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,aNoneBlock:aNoneBlock},smalltalk.MobileToDoStorage)})},
args: ["aBlock", "aNoneBlock"],
source: "detect: aBlock ifNone: aNoneBlock\x0a\x09^self items detect: aBlock ifNone: aNoneBlock",
messageSends: ["detect:ifNone:", "items"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumeration',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.MobileToDoStorage)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09^self items do: aBlock",
messageSends: ["do:", "items"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._indexOf_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anInteger:anInteger},smalltalk.MobileToDoStorage)})},
args: ["anInteger"],
source: "indexOf: anInteger\x0a\x09^self items indexOf: anInteger",
messageSends: ["indexOf:", "items"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initItems",
category: 'initialization',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@items"]=_st($Array())._new();
$1=self["@items"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initItems",{},smalltalk.MobileToDoStorage)})},
args: [],
source: "initItems\x0a\x09items := Array new.\x0a\x09^items",
messageSends: ["new"],
referencedClasses: ["Array"]
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@storage"]=nil;
_st(self)._initItems();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MobileToDoStorage)})},
args: [],
source: "initialize\x0a\x09storage := nil.\x0a\x09self initItems.\x0a\x09\x0a\x09\x22For debug\x22\x0a\x09\x22self storage removeItem: 'MobileToDoList'\x22",
messageSends: ["initItems"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
category: 'accessing',
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
args: [],
source: "items\x0a\x09^items ifNil: [items := self initItems]",
messageSends: ["ifNil:", "initItems"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "load",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._loadItems();
return self}, function($ctx1) {$ctx1.fill(self,"load",{},smalltalk.MobileToDoStorage)})},
args: [],
source: "load\x0a\x09self loadItems",
messageSends: ["loadItems"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "loadItems",
category: 'private',
fn: function (){
var self=this;
var jsonStr,loadedJson;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $MobileToDoItem(){return smalltalk.MobileToDoItem||(typeof MobileToDoItem=="undefined"?nil:MobileToDoItem)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
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
_st(console)._log_(_st("#loadItems: ").__comma(jsonStr));
loadedJson=_st($JSON())._parse_(jsonStr);
self["@items"]=_st(loadedJson)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($MobileToDoItem())._fromDictionary_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loadItems",{jsonStr:jsonStr,loadedJson:loadedJson},smalltalk.MobileToDoStorage)})},
args: [],
source: "loadItems\x0a\x09| jsonStr loadedJson |\x0a\x09jsonStr := self storage getItem: 'MobileToDoList'.\x0a\x09jsonStr ifNil: [self initItems; saveItems. ^#()].\x0a\x09console log: '#loadItems: ', jsonStr.\x0a\x09loadedJson := JSON parse: jsonStr.\x0a\x09items := loadedJson collect: [ :each | MobileToDoItem fromDictionary: each ]",
messageSends: ["getItem:", "storage", "ifNil:", "initItems", "saveItems", "log:", ",", "parse:", "collect:", "fromDictionary:"],
referencedClasses: ["JSON", "MobileToDoItem"]
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'add/remove',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._items())._remove_(anItem);
_st(self)._save();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anItem:anItem},smalltalk.MobileToDoStorage)})},
args: ["anItem"],
source: "remove: anItem\x0a\x09self items remove: anItem.\x0a\x09self save",
messageSends: ["remove:", "items", "save"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'add/remove',
fn: function (anItem,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._items())._remove_ifAbsent_(anItem,aBlock);
_st(self)._save();
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anItem:anItem,aBlock:aBlock},smalltalk.MobileToDoStorage)})},
args: ["anItem", "aBlock"],
source: "remove: anItem ifAbsent: aBlock\x0a\x09self items remove: anItem ifAbsent: aBlock.\x0a\x09self save",
messageSends: ["remove:ifAbsent:", "items", "save"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAt:",
category: 'add/remove',
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._removeAt_ifAbsent_(anId,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeAt:",{anId:anId},smalltalk.MobileToDoStorage)})},
args: ["anId"],
source: "removeAt: anId \x0a\x09self removeAt: anId ifAbsent: []",
messageSends: ["removeAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAt:ifAbsent:",
category: 'add/remove',
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
args: ["anId", "aBlock"],
source: "removeAt: anId ifAbsent: aBlock\x0a\x09| found |\x0a\x09found := self detect: [:each | each id = anId] ifNone: [^aBlock value].\x0a\x09self remove: found",
messageSends: ["detect:ifNone:", "=", "id", "value", "remove:"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "save",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._saveItems();
return self}, function($ctx1) {$ctx1.fill(self,"save",{},smalltalk.MobileToDoStorage)})},
args: [],
source: "save\x0a\x09self saveItems",
messageSends: ["saveItems"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "saveItems",
category: 'private',
fn: function (){
var self=this;
var jsonStr;
return smalltalk.withContext(function($ctx1) { 
jsonStr=_st(_st(self)._items())._asJSONString();
_st(_st(self)._storage())._setItem_value_("MobileToDoList",jsonStr);
_st(console)._log_(_st("saveItems: ").__comma(jsonStr));
return self}, function($ctx1) {$ctx1.fill(self,"saveItems",{jsonStr:jsonStr},smalltalk.MobileToDoStorage)})},
args: [],
source: "saveItems\x0a\x09| jsonStr |\x0a\x09jsonStr := self items asJSONString.\x0a\x09self storage setItem: 'MobileToDoList' value: jsonStr.\x0a\x09console log: 'saveItems: ', jsonStr",
messageSends: ["asJSONString", "items", "setItem:value:", "storage", "log:", ","],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
category: 'enumeration',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._select_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock},smalltalk.MobileToDoStorage)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09^self items select: aBlock",
messageSends: ["select:", "items"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.MobileToDoStorage)})},
args: [],
source: "size\x0a\x09^self items size",
messageSends: ["size", "items"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "storage",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@storage"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@storage"]=_st(self)._defaultStorage();
$1=self["@storage"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"storage",{},smalltalk.MobileToDoStorage)})},
args: [],
source: "storage\x0a\x09^storage ifNil: [storage := self defaultStorage]",
messageSends: ["ifNil:", "defaultStorage"],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "storage:",
category: 'accessing',
fn: function (aStorage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@storage"]=aStorage;
return self}, function($ctx1) {$ctx1.fill(self,"storage:",{aStorage:aStorage},smalltalk.MobileToDoStorage)})},
args: ["aStorage"],
source: "storage: aStorage\x0a\x09storage := aStorage",
messageSends: [],
referencedClasses: []
}),
smalltalk.MobileToDoStorage);



