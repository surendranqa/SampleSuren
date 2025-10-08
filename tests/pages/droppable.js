export class Droppable{
    constructor(page){
    this.page=page
    this.sample=page.locator('[id="droppableExample-tab-simple"]')
    this.dragMe=page.locator('[id="draggable"]')
    this.dropped=page.locator('[id="droppable"]')
    this.accept=page.locator('id="droppableExample-tab-accept"')
    this.acceptable=page.locator('[id="acceptable"]')
    this.notAcceptable=page.locator('[id="notAcceptable"]').
    this.dropHere=page.locator('[id="droppable"]')
    this.preventPropagation=page.locator('[id="droppableExample-tab-preventPropogation"]')
    this.dragMe=page.locator('[id="dragBox"]')
    this.outerdroppableNotGreedy=page.locator('[id="notGreedyDropBox"]')
    this.innerDroppableNotGrredy=page.locator('[id="notGreedyInnerDropBox"]')
    this.outerdroppableGreedy=page.locator('[id="greedyDropBox"]')
    this.innerdroppableGreedy=page.locator('[id="greedyDropBoxInner"]')
    this.revertDraggable=page.locator('[id="droppableExample-tab-revertable"]')
    this.willRevert=page.locator('[id="revertable"]')
    this.notRevert=page.locator('[id="notRevertable"]')
    this.dropHere=page.locator('[id="droppable"]')


    }
    

}