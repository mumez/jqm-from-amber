Smalltalk current createPackage: 'Jqm-ToDo'!
Widget subclass: #MobileToDo
	instanceVariableNames: 'storage listPart'
	package: 'Jqm-ToDo'!
!MobileToDo commentStamp!
MobileToDo main!

!MobileToDo methodsFor: 'accessing'!

items
	^self storage items
!

storage
	^storage
! !

!MobileToDo methodsFor: 'actions'!

addItemText: aString
	| newItem |
	console log: 'addItemText ', aString.
	newItem := MobileToDoItem new.
	newItem text: aString.
	self storage add: newItem.
	'#taskDescription' asJQuery val: ''.
	self updateListPart
!

removeAllItems
	console log: 'removeAll'.
	self storage initItems; save.
	self updateListPart
!

removeItemAt: anId
	console log: 'removeItemAt  ', anId.
	self storage removeAt: anId ifAbsent: [^ console log: 'Task not found: ', anId].
	self updateListPart
! !

!MobileToDo methodsFor: 'factory'!

storageClass
	^ MobileToDoStorage
! !

!MobileToDo methodsFor: 'initialization'!

initialize
	storage := self storageClass new load
! !

!MobileToDo methodsFor: 'opening'!

start
	
	self renderOn: (JqmCanvas onJQuery: 'body' asJQuery)
! !

!MobileToDo methodsFor: 'rendering'!

renderAddDialogOn: html
	html pageId: 'add' with: [
		html header: [html h2: 'Enter a task'].
		html content: [
			html fieldContain: [
					(html label for: 'taskDescription') with: 'To do:'.
					html input type: 'text'; id: 'taskDescription'; value: ''.
			].
			(html buttonLabeled: 'Add' to: 'main' id: 'addButton') onClick: [self addItemText: '#taskDescription' asJQuery val].
			html buttonLabeled: 'Cancel' to: 'main' id: 'cancel'.
		]
	]
!

renderItem: anItem on: html
	(html li dataIcon: 'delete';
		id: anItem id;
		with: [html a with: anItem text]) onClick: [self removeItemAt: anItem id]
!

renderMainOn: html
	html pageId: 'main' with: [
		html header: [
			html h1: 'ToDoList'.
			html dialogButtonLabeled: 'Add' to: 'add'.
		].
		html content: [
			(listPart := html ul id: 'toDoList') with: [
				self items do: [:each | self renderItem: each on: html]
			]
		].
		html footer: [
			html button id: 'removeAllButton'; dataIcon: 'removeAll'; with: 'Remove All'; onClick: [
				self removeAllItems.
			]
		]
	]
!

renderOn: html
	self renderMainOn: html.
	self renderAddDialogOn: html
! !

!MobileToDo methodsFor: 'updating'!

updateListPart
	| jqElem |
	
	listPart contents: [:html |
		self items do: [:each | self renderItem: each on: html]
	].
	
	jqElem := '#toDoList' asJQuery.	
	jqElem listview listview: 'refresh'
! !

MobileToDo class instanceVariableNames: 'current'!

!MobileToDo class methodsFor: 'accessing'!

current
	^ current ifNil: [current := super new]
! !

!MobileToDo class methodsFor: 'opening'!

main
	self current start
!

updateAfterOpen
	self current updateListPart
! !

Object subclass: #MobileToDoItem
	instanceVariableNames: 'id text isDone'
	package: 'Jqm-ToDo'!

!MobileToDoItem methodsFor: 'accessing'!

id
	^id ifNil: [id := self newUuid]
!

id: anId
	id := anId
!

isDone
	^ isDone ifNil: [isDone := false]
!

isDone: aBoolean
	 isDone := aBoolean
!

text
	^ text ifNil: [text := '']
!

text: aString
	text := aString
! !

!MobileToDoItem methodsFor: 'private'!

initialize
	super initialize.
	id := self newUuid
!

newUuid
	| randomGen partGen |
	randomGen :=['0123456789abcde' atRandom].
	partGen := [('    ') collect: [:e | randomGen value]].

	^partGen value, partGen value, '-', partGen value, '-', partGen value, '-', partGen value, '-', partGen value, partGen value, partGen value
!

printOn: aStream
	aStream nextPutAll: 'aToDoItem:('.
	aStream nextPutAll: self id.
	aStream space.
	aStream nextPutAll: self text.
	aStream nextPutAll: ')'
! !

!MobileToDoItem class methodsFor: 'instance creation'!

fromDictionary: aDict
	| todo |
	todo := self new.
	todo id: (aDict at: 'id' ifAbsent: []).
	todo text: (aDict at: 'text' ifAbsent:[]).
	todo isDone: (aDict at: 'isDone' ifAbsent:[]).
	^ todo
! !

Object subclass: #MobileToDoStorage
	instanceVariableNames: 'storage items'
	package: 'Jqm-ToDo'!

!MobileToDoStorage methodsFor: 'accessing'!

at: anInteger
	^self items at: anInteger
!

at: anInteger put: anObject
	self items at: anInteger put: anObject.
	self save
!

indexOf: anInteger
	^self items indexOf: anInteger
!

items
	^items ifNil: [items := self initItems]
!

size
	^self items size
!

storage
	^storage ifNil: [storage := self defaultStorage]
!

storage: aStorage
	storage := aStorage
! !

!MobileToDoStorage methodsFor: 'actions'!

load
	self loadItems
!

save
	self saveItems
! !

!MobileToDoStorage methodsFor: 'add/remove'!

add: anItem
	self items add: anItem.
	self save
!

remove: anItem
	self items remove: anItem.
	self save
!

remove: anItem ifAbsent: aBlock
	self items remove: anItem ifAbsent: aBlock.
	self save
!

removeAt: anId 
	self removeAt: anId ifAbsent: []
!

removeAt: anId ifAbsent: aBlock
	| found |
	found := self detect: [:each | each id = anId] ifNone: [^aBlock value].
	self remove: found
! !

!MobileToDoStorage methodsFor: 'defaults'!

defaultStorage
	^ localStorage
! !

!MobileToDoStorage methodsFor: 'enumeration'!

collect: aBlock
	^self items collect: aBlock
!

detect: aBlock ifNone: aNoneBlock
	^self items detect: aBlock ifNone: aNoneBlock
!

do: aBlock
	^self items do: aBlock
!

select: aBlock
	^self items select: aBlock
! !

!MobileToDoStorage methodsFor: 'initialization'!

initItems
	items := Array new.
	^items
!

initialize
	storage := nil.
	self initItems.
	
	"For debug"
	"self storage removeItem: 'MobileToDoList'"
! !

!MobileToDoStorage methodsFor: 'private'!

loadItems
	| jsonStr loadedJson |
	jsonStr := self storage getItem: 'MobileToDoList'.
	jsonStr ifNil: [self initItems; saveItems. ^#()].
	console log: '#loadItems: ', jsonStr.
	loadedJson := JSON parse: jsonStr.
	items := loadedJson collect: [ :each | MobileToDoItem fromDictionary: each ]
!

saveItems
	| jsonStr |
	jsonStr := self items asJSONString.
	self storage setItem: 'MobileToDoList' value: jsonStr.
	console log: 'saveItems: ', jsonStr
! !

