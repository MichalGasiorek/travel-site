import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor(){
        this.siteHeader = document.querySelector('.site-header');
        this.headerTriggerElement = document.querySelector('.large-hero__title');
        this.pageSections = document.querySelectorAll('.page-section');
        this.headerLinks = document.querySelectorAll('.primary-nav a');

        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        const that = this;
        new Waypoint({
            element: that.headerTriggerElement,
            handler: () => {
                that.siteHeader.classList.toggle('site-header--dark');
            }
        });
    }

    createPageSectionWaypoints() {
        this.pageSections.forEach(item => {
            const that = this;
            new Waypoint({
                element: item,
                handler: (direction) => {

                    if(direction === 'down'){
                        const matchingHeaderLink = item.getAttribute('data-matching-link');
                        that.headerLinks.forEach(link => {
                        link.classList.remove('is-current-link');
                        })
                        document.querySelector(matchingHeaderLink).classList.add("is-current-link");
                    }
                    
                },
                offset: '18%',
            });

            new Waypoint({
                element: item,
                handler: (direction) => {

                    if(direction === 'up'){
                        const matchingHeaderLink = item.getAttribute('data-matching-link');
                        that.headerLinks.forEach(link => {
                        link.classList.remove('is-current-link');
                        })
                        document.querySelector(matchingHeaderLink).classList.add("is-current-link");
                    }   
                },
                offset: '-40%',
            });
        });
    }
}

export default StickyHeader;