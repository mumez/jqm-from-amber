Smalltalk current createPackage: 'Jqm-Canvas'!
HTMLCanvas subclass: #JqmCanvas
	instanceVariableNames: 'namespace'
	package: 'Jqm-Canvas'!

!JqmCanvas methodsFor: 'accessing'!

mobile
	^ self root mobile
!

namespace
	^ namespace ifNil: [namespace := '']
!

namespace: aString
	namespace := aString
!

normalCanvas
	^ HTMLCanvas onJQuery: self root asJQuery
! !

!JqmCanvas methodsFor: 'factory'!

newTag: aString
	| tag |
	tag := JqmTagBrush fromString: aString canvas: self.
	tag namespace: self namespace.
	^tag
! !

!JqmCanvas methodsFor: 'tags'!

backButtonTo: refId
	^self backRel href: ('#', refId)
!

backRel
	^self a dataRel
!

button
	^self a dataRole: 'button'
!

buttonLabeled: label to: refId
	^(self buttonTo: refId) with: label
!

buttonLabeled: label to: refId id: id
	^(self buttonTo: refId) id: id; with: label
!

buttonTo: refId
	^self button href: ('#', refId)
!

closeButton
	^self button dataRel: 'close'
!

collapsible
	^self div dataRole: 'collapsible'
!

collapsibleSet
	^self div dataRole: 'collapsible-set'
!

content
	^self div dataRole: 'content'
!

content: aBlock
	^self content with: aBlock
!

controlGroup
	^self div dataRole: 'controlgroup'
!

controlGroup: aBlock
	^self controlGroup with: aBlock
!

dialogButtonLabeled: label to: refId
	^(self dialogButtonTo: refId) with: label
!

dialogButtonTo: refId
	^self dialogRel	href: ('#', refId)
!

dialogRel
	^self a dialogRel
!

externalRel
	^self a externalRel
!

externalRel: url
	^self externalRel href: url
!

fieldContain
	^self div dataRole: 'fieldcontain'
!

fieldContain: aBlock
	^self fieldContain with: aBlock
!

footer
	^self div dataRole: 'footer'
!

footer: aBlock
	^self footer with: aBlock
!

header
	^self div dataRole: 'header'
!

header: aBlock
	^self header with: aBlock
!

listDivider
	^self li dataRole: 'list-divider'
!

navbar
	^self div dataRole: 'navbar'
!

ol
	^super ol dataRole: 'list-view'
!

page
	^self div dataRole: 'page'
!

pageId: id
	^self page id: id
!

pageId: id class: klass with: aBlock
	^(self page id: id) class:  klass; with: aBlock
!

pageId: id with: aBlock
	^(self page id: id) with: aBlock
!

panel
	^self div dataRole: 'panel'
!

popup
	^self div dataRole: 'popup'
!

popupRel
	^self a popupRel
!

popupRel: refId
	^self a dataRel: 'popup'; href: ('#', refId)
!

rangeSlider
	^self div dataRole: 'rangeSlider'
!

resetButton
	^self input type: 'reset'
!

slider
	^self select dataRole: 'slider'
!

submitButton
	^self input type: 'submit'
!

table
	^super table dataRole: 'table'
!

ul
	^super ul dataRole: 'list-view'
! !

!JqmCanvas class methodsFor: 'instance creation'!

on: aJQuery
	^self onJQuery: aJQuery
!

on: aJQuery namespace: aString
	^(self on: aJQuery) namespace: aString
! !

TagBrush subclass: #JqmTagBrush
	instanceVariableNames: 'namespace'
	package: 'Jqm-Canvas'!

!JqmTagBrush methodsFor: 'accessing'!

mobile
	^self asJQuery mobile
!

namespace
	^ namespace ifNil: [namespace := '']
!

namespace: aString
	namespace := aString
! !

!JqmTagBrush methodsFor: 'actions'!

backRel
	self dataRel: 'back'
!

columnToggle
	self dataMode: 'columntoggle'
!

dataMini
	self dataAt: 'mini' put: 'true'
!

dataThemeA
	self dataAt: 'theme' put: 'a'
!

dataThemeB
	self dataAt: 'theme' put: 'b'
!

dataThemeC
	self dataAt: 'theme' put: 'c'
!

dataThemeD
	self dataAt: 'theme' put: 'd'
!

dataThemeE
	self dataAt: 'theme' put: 'e'
!

dialogRel
	self dataRel: 'dialog'
!

externalRel
	^self dataRel: 'external'
!

horizontal
	self dataType: 'horizontal'
!

mini
	self dataMini: true
!

noAjax
	self dataAjax: false
!

popupRel
	^self dataRel: 'popup'
!

reflow
	self dataMode: 'reflow'
! !

!JqmTagBrush methodsFor: 'aria'!

ariaLevel: value
	self at: 'aria-level' put: value
!

role: value
	self at: 'role' put: value
! !

!JqmTagBrush methodsFor: 'data attributes'!

dataAddBackButton: value
	self dataAt: 'add-back-btn' put: value
!

dataAjax: value
	self dataAt: 'ajax' put: value
!

dataAnimate: value
	self dataAt: 'animate' put: value
!

dataAt: key put: value
	| ns |
	ns := self namespace.
	ns isEmpty ifTrue: [
		self at: ('data-', key) put: value
	] ifFalse: [
		self at: ('data-', ns, '-', key) put: value
	]
!

dataAutoDividers: value
	self dataAt: 'autodividers' put: value
!

dataBackButtonText: value
	self dataAt: 'add-back-btn-text' put: value
!

dataBackButtonTheme: value
	self dataAt: 'back-btn-theme' put: value
!

dataClearButton: value
	self dataAt: 'add-clear-btn' put: value
!

dataClearButtonText: value
	self dataAt: 'add-clear-btn-text' put: value
!

dataCloseButtonText: value
	self dataAt: 'add-close-btn-text' put: value
!

dataCollapsed: value
	self dataAt: 'collapsed' put: value
!

dataCollapsedIcon: value
	self dataAt: 'collapsed-icon' put: value
!

dataContentTheme: value
	self dataAt: 'content-theme' put: value
!

dataCorners: value
	self dataAt: 'corners' put: value
!

dataCountTheme: value
	self dataAt: 'count-theme' put: value
!

dataDirection: value
	self dataAt: 'direction' put: value
!

dataDisablePageZoom: value
	self dataAt: 'disable-page-zoom' put: value
!

dataDismissible: value
	self dataAt: 'dismissible' put: value
!

dataDisplay: value
	self dataAt: 'display' put: value
!

dataDividerTheme: value
	self dataAt: 'divider-theme' put: value
!

dataDomCache: value
	self dataAt: 'dom-cache' put: value
!

dataEnhance: value
	self dataAt: 'enhance' put: value
!

dataExpandedIcon: value
	self dataAt: 'expanded-icon' put: value
!

dataFieldContain: value
	self dataAt: 'fieldcontain' put: value
!

dataFilter: value
	self dataAt: 'filter' put: value
!

dataFilterPlaceholder: value
	self dataAt: 'filter-placeholder' put: value
!

dataFilterText: value
	self dataAt: 'filtertext' put: value
!

dataFilterTheme: value
	self dataAt: 'filter-theme' put: value
!

dataFullscreen: value
	self dataAt: 'fullscreen' put: value
!

dataHeaderTheme: value
	self dataAt: 'header-theme' put: value
!

dataHighlight: value
	self dataAt: 'highlight' put: value
!

dataHistory: value
	self dataAt: 'history' put: value
!

dataIcon: value
	self dataAt: 'icon' put: value
!

dataIconPos: value
	self dataAt: 'iconpos' put: value
!

dataIconShadow: value
	self dataAt: 'iconshadow' put: value
!

dataId: value
	self dataAt: 'id' put: value
!

dataInline: value
	self dataAt: 'inline' put: value
!

dataInset: value
	self dataAt: 'inset' put: value
!

dataMini: value
	self dataAt: 'mini' put: value
!

dataMode: value
	self dataAt: 'mode' put: value
!

dataNativeMenu: value
	self dataAt: 'native-menu' put: value
!

dataOverlayTheme: value
	self dataAt: 'overlay-theme' put: value
!

dataPlaceholder: value
	self dataAt: 'placeholder' put: value
!

dataPosition: value
	self dataAt: 'position' put: value
!

dataPositionFixed: value
	self dataAt: 'position-fixed' put: value
!

dataPositionTo: value
	self dataAt: 'position-to' put: value
!

dataPrefetch: value
	self dataAt: 'prefetch' put: value
!

dataPriority: value
	self dataAt: 'priority' put: value
!

dataRel: value
	self dataAt: 'rel' put: value
!

dataRole: value
	self dataAt: 'role' put: value
!

dataShadow: value
	self dataAt: 'shadow' put: value
!

dataSplitIcon: value
	self dataAt: 'split-icon' put: value
!

dataSplitTheme: value
	self dataAt: 'split-theme' put: value
!

dataTapToggle: value
	self dataAt: 'tap-toggle' put: value
!

dataTheme: value
	self dataAt: 'theme' put: value
!

dataTitle: value
	self dataAt: 'title' put: value
!

dataTolerance: value
	self dataAt: 'tolerance' put: value
!

dataTrackTheme: value
	self dataAt: 'track-theme' put: value
!

dataTransition: value
	self dataAt: 'transition' put: value
!

dataType: value
	self dataAt: 'type' put: value
!

dataUpdatePagePadding: value
	self dataAt: 'update-page-padding' put: value
!

dataUrl: value
	self dataAt: 'url' put: value
!

dataVisibleOnPageShow: value
	self dataAt: 'visible-on-page-show' put: value
! !

!JqmTagBrush methodsFor: 'events'!

off: eventName do: aBlock
	self asJQuery off: eventName do: aBlock
!

off: eventName of:  selector do: aBlock
	self asJQuery off: eventName of: selector do: aBlock
!

on: eventName do: aBlock
	self asJQuery on: eventName do: aBlock
!

on: eventName of:  selector do: aBlock
	self asJQuery on: eventName of: selector do: aBlock
! !

