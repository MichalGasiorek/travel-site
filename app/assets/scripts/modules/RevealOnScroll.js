import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(selector, delay){
        this.itemToReveal = selector;
        this.delay = delay;
        this.hideInit();
        this.createWaypoints();
    }

    hideInit() {
        this.itemToReveal.forEach(item => {
            item.classList.add('reveal-item');
        });
    }

    createWaypoints() {
        const that = this;
        this.itemToReveal.forEach(item => {
           new Waypoint({
               element: item,
               handler: () => {
                   item.classList.add('reveal-item--is-visible');
               },
               offset: that.delay,
           }); 
        });
    }
}

export default RevealOnScroll;