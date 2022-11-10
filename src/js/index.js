




const products_list = document.querySelectorAll('.products_list') ,
products_items = document.querySelectorAll('.products_item') ,
filter_elements = document.querySelectorAll('.filter_elements .item')

if(filter_elements) {
    
    if(screen.width < 1200 && screen.width > 768) {
        $('.lower_part_items').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });
    } else if(screen.width <= 768) {
        $('.lower_part_items').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });
    } 
    else {
        $('.lower_part_items').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });
    }

    filter_elements.forEach(item => {
        item.addEventListener('click' , (e) => {
            if(!item.classList.contains('selected')) {
                filter_elements.forEach(item => item.classList.remove('selected') )
                item.classList.add('selected')
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
}

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

