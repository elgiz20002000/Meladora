
$('.thumbnail').viewbox({

    // template
    template: '<div class="viewbox-container"><div class="viewbox-body"><div class="viewbox-header"></div><div class="viewbox-content"></div><div class="viewbox-footer"></div></div></div>',
  
    // loading spinner
    loader: '<div class="loader"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>',
  
    // show title
    setTitle: true,
  
    // margin in px
    margin: 20,
  
    // duration in ms
    resizeDuration: 300,
    openDuration: 200,
    closeDuration: 200,
  
    // show close button
    closeButton: true,
  
    // show nav buttons
    navButtons: true,
  
    // close on side click
    closeOnSideClick: true,
  
    // go to next image on content click
    nextOnContentClick: true,
  
    // enable touch gestures
    useGestures: true,
  
    // image extensions
    // used to determine if a target url is an image file
    imageExt: ['png','jpg','jpeg','webp','gif']
    
  });
  
const products_list = document.querySelectorAll('.products_list') ,
products_items = document.querySelectorAll('.products_item') ,
filter_elements = document.querySelectorAll('.filter_elements .item')


    filter_elements.forEach(item => {
        item.addEventListener('click' , (e) => {
            if(!item.classList.contains('selected_item')) {
                filter_elements.forEach(item => item.classList.remove('selected_item') )
                item.classList.add('selected_item')
                products_items.forEach(product_item => product_item.style.display='block' )
    
                products_items.forEach(product_item => {
             
                    if(product_item.getAttribute('data-type') != item.getAttribute('data-type')) {
                        product_item.style.display = 'none'
                    }
    
                    if(item.getAttribute('data-type') == 'all') {
                        products_items.forEach(product_item => product_item.style.display='block' )
                    }
                })
            }
        })
    })


let search_btn = document.querySelector('.search_btn')

let search_overlay =  document.querySelector('.search_overlay') ,
exit_btn_search = document.querySelector('.search_overlay .exit_btn')




exit_btn_search.addEventListener('click' , (e) => {
    search_overlay.classList.remove('active')
})

search_btn.addEventListener('click' , (e) => {
    search_overlay.classList.add('active')
})

let menu_btn = document.querySelector('.menu_btn') ,
exit_btn_menu = document.querySelector('.menu_overlay .exit_btn')



menu_btn.addEventListener('click' , () => {
    document.querySelector('.menu_overlay').classList.add('active')
})

exit_btn_menu.addEventListener('click' , (e) => {
    document.querySelector('.menu_overlay').classList.remove('active')
})


let modal_overlay = document.querySelector('.modal_overlay') ,
modal_exit_btn = modal_overlay.querySelector('.exit_btn') 




modal_exit_btn.addEventListener('click' , (e) => {
    if(modal_overlay.classList.contains('active')) {
        modal_overlay.classList.remove('active')
    }
})

products_items.forEach(item => {
    item.addEventListener('click' , () => {
        if(!modal_overlay.classList.contains('active')) {
            modal_overlay.classList.add('active')
        }
    })
})


