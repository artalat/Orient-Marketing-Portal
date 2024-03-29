
$('document').ready(function(){

  $('#svrs-table').dataTable( {

    "processing": true,
    "serverSide": true,
    "order": [[ 0, "desc" ]],
    "ajax": {
      "url": "/svrs",
      "type": "GET",
    }
  });

  window.onhashchange = function(){
    url = window.location.href;
    url = url.replace('#','');
    $.ajax( {
      type: "GET",
      url: url,
      dataType: "script",
      success: function( response ) {
      }
    });
  }

  $(".view_all_link").click(function(){
    id = $(this).data("image");
    type = $(this).data("type");
    $.ajax ({
      url:  '/images/'+ id + '/view_more_comments',
      data: {type: type },
      success: function(data)
      {
        $(".view_more").remove();
      }
    });
  });


  $(".view_all_comment").click(function(){
    id = $(this).data("post");
    shop_id =$(this).data("shop");
    $.ajax ({
      url:  '/shops/' + shop_id + '/svrs/'+ id + '/view_more_comments',
      success: function(data)
      {
        $(".view_more").remove();
      }
    });
  });

  $(".load-more-comment").click(function(){
    id = $(this).data("activity");
    $.ajax ({
      url: '/comments/'+id+'/load_more_comments',
      success: function(data)
      {
        $(".view-more").remove();
      }
    });
  });



  $(".view_all_shop_comment").click(function(){
    id =$(this).data("shop");
    $.ajax ({
      url:  '/shops/'+id +'/view_more_comments',
      success: function(data)
      {
        $(".view_more").remove();
      }
    });
  });

  $(".view_all_dealer_comment").click(function(){
    id =$(this).data("dealer");
    $.ajax ({
      url:  '/dealers/'+id +'/view_more_comments',
      success: function(data)
      {
        $(".view_more").remove();
      }
    });
  });

  $("#svrs-table input[type=text]").each(function(){
    $(this).addClass("form-control");
  });

  $("#sidebar").hover(function(){
    $("#page-container").addClass("sidebar-visible-lg");
  });



  $(".sidebar-nav-menu.active").parent().find('ul').show();

  $('.category-tab').click();
  $('.brand-tab').click();
  $('.datepicker').datepicker();
  $('.filter-datepicker').datepicker({ dateFormat: 'dd/mm/yy' });

  $('.jFax-chart').width($("#page-content").width());

  $('.tree-toggle').click(function () {
    $(this).parent().children('ul.tree').toggle(200);
  });

  $(".check-all-option input[type=checkbox]").click(function(){
    if($(this).is(':checked')){
      $(".subscriber-form input").each(function(){
        $(this).prop("checked", true);
      });
    }
    else{
      $(".subscriber-form input").each(function(){
        $(this).prop("checked", false);
      });
    }
  });

  if($('.activities .pagination').length)
  {
    $('.activities-section').scroll(function(){
      var url = $('.activities .pagination a[rel=next]').attr('href');
      if(url &&  $('.activities-section')[0].scrollHeight)
      {
        if ($('.activities-section').scrollTop() > -1)
        {
          $.ajax({
            url: url,
            success: function(data)
            {
              $('.activities-section').append(data);
              url = $('.activities .pagination a[rel=next]').attr('href');
            }
          });
        }
      }
    });
    $('.activities-section').scroll();
  }

  if($('.user-activities .pagination').length)
  {
    $('.user-activities-section').scroll(function(){
      var url = $('.user-activities .pagination a[rel=next]').attr('href');
      if(url &&  $('.user-activities-section')[0].scrollHeight)
      {
        if ($('.user-activities-section').scrollTop() > -1)
        {
          $.ajax({
            url: url,
            success: function(data)
            {
              $('.user-activities-section').append(data);
              url = $('.user-activities .pagination a[rel=next]').attr('href');
            }
          });
        }
      }

    });
    $('.user-activities-section').scroll();
  }


  if($('.pager_notification .pagination').length)
  {
    $('.notification-content').scroll(function(){
      var url = $('.pager_notification .pagination a[rel=next]').attr('href');
      if(url &&  $('.notification-content')[0].scrollHeight)
      {
        if ($('.notification-content').scrollTop() > -1)
        {
          $.ajax({
            url: url,
            success: function(data)
            {
              $('.notification-content').append(data);
              url = $('.pager_notification .pagination a[rel=next]').attr('href');
            }
          });
        }
      }

    });
    $('.notification-content').scroll();
  }

  if($(".shop_people_paginator .pagination").length)
  {
    $(".shop-peoples-content").scroll(function(){
      var url = $('.shop_people_paginator .pagination a[rel=next]').attr('href');
      console.log(url);
      if(url &&  $('.shop-peoples-content')[0].scrollHeight)
      {
        if ($('.shop-peoples-content').scrollTop() > -1)
        {
          $.ajax({
            url: url,
            success: function(data)
            {
              $('.shop-peoples').append(data);
              url = $('.shop_people_paginator .pagination a[rel=next]').attr('href');
            }
          });
        }
      }
    });
    $(".shop-peoples-content").scroll();
  }

  if($(".brand_corner_report_paginator .pagination").length)
  {
    $(".brand-content").scroll(function(){
      var url = $('.brand_corner_report_paginator .pagination a[rel=next]').attr('href');
      if(url &&  $('.brand-content')[0].scrollHeight)
      {
        if ($('.brand-content').scrollTop() > -1)
        {
          $.ajax({
            url: url,
            success: function(data)
            {
              $('.brand-result').append(data);
              url = $('.brand_corner_report_paginator .pagination a[rel=next]').attr('href');
            }
          });
        }
      }
    });
    $(".brand-content").scroll();
  }

  if($(".category_corner_report_paginator .pagination").length)
  {
    $(".categroy-content").scroll(function(){
      var url = $('.category_corner_report_paginator .pagination a[rel=next]').attr('href');
      if(url &&  $(".categroy-content")[0].scrollHeight)
      {
        if ($('.categroy-content').scrollTop() > -1)
        {
          $.ajax({
            url: url,
            success: function(data)
            {
              $('.category-result').append(data);
              url = $('.category_corner_report_paginator .pagination a[rel=next]').attr('href');
            }
          });
        }
      }
    });
    $(".category-content").scroll();
  }


  if($(".upload_images_paginator .pagination").length)
  {
    $(".upload-image-block").scroll(function(){
      var url = $('.upload_images_paginator .pagination a[rel=next]').attr('href');
      if(url &&  $('.upload-image-block')[0].scrollHeight)
      {
        if ($('.upload-image-block').scrollTop() > -1)
        {
          $.ajax({
            url: url,
            success: function(data)
            {
              $('.upload-content').append(data);
              url = $('.upload_images_paginator .pagination a[rel=next]').attr('href');
            }
          });
        }
      }
    });
    $(".upload-image-block").scroll();
  }

  if($('.subscribe .pagination').length)
  {
    $('.subscribe-activities').scroll(function(){
      var url = $('.subscribe .pagination a[rel=next]').attr('href');
      if(url &&  $('.subscribe-activities')[0].scrollHeight)
      {
        if ($('.subscribe-activities').scrollTop() > -1)
        {
          $.ajax({
            url: url,
            success: function(data)
            {
              $('.subscribe-activities').append(data);
              url = $('.subscribe .pagination a[rel=next]').attr('href');
            }
          });
        }
      }

    });
    $('.subscribe-activities').scroll();
  }

  $(".scroll-dealer, .scroll-subscribe, .activity-scroll, .notification-scroll, .user-activity-scroll").slimScroll({
    height: 'auto',
    size: '5px'
  });

  $(".scroll-dealers-data").slimScroll({
    height: 'auto',
    size: '5px'
  });

  $(".scroll-dealer-report").slimScroll({
    height: 'auto',
    size: '5px'
  });

  $(".scroll-shop-report").slimScroll({
    height: 'auto',
    size : '5px'
  });

  $(".scroll-shop-image").slimScroll({
    height: 'auto',
    size: '5px'
  });

  $(".scroll-shop-svr").slimScroll({
    height: 'auto',
    size: '5px'
  });

  $(".scroll-shop-people").slimScroll({
    height: 'auto',
    size: '5px'
  });

  $(".scroll-brand-corner-report").slimScroll({
    height: 'auto',
    size : '5px'
  });

  $(".scroll-category-corner-report").slimScroll({
    height: 'auto',
    size : '5px'
  });


  $(".scroll-upload-images").slimScroll({
    height: 'auto',
    size : '5px'
  });

  $('select').selectpicker();

  if($('.form-validate').length > -1)
  {
    $('.form-validate').each(function(){
      var id = $(this).attr('id');
      $("#"+id).validate({
        errorElement:'span',
        errorClass: 'help-block error',
        errorPlacement:function(error, element){
          element.parents('.controls').append(error);
        },
        highlight: function(label) {
          $(label).closest('.control-group').removeClass('error success').addClass('error');
        },
        success: function(label) {
          label.addClass('valid').closest('.control-group').removeClass('error success').addClass('success');
        }
      });
    });
  }

  $(".add_more_people_link").click(function(e){
    parent  = $(".people-form-container");
    index = Math.floor(parent.find("input").length / 5)
    $.ajax ({
        url:  '/shops/people_field',
        data: {index: index},
        success: function(data)
        {
          parent.append(data);
        }
    });
  });

  $(".add_more_link").click(function(e){
    e.preventDefault();
    index = $(this).data("index");
    length = $(this).parent().find('input').length;
    child = $(this).parent().find('.avatar-fields');
    $.ajax ({
        url:  '/svrs/file_field',
        data: {index: index, length: length },
        success: function(data)
        {
          child.append(data);
        }
    });
  });



  $(".radio-controls label input").change(function(e){

    e.preventDefault();

    text = $(this).val();
    index = $(this).parent().data('index');

    parent = $(this).parent().parent().find(".avatar-fields")
    avatar_link = $(this).parent().parent().find('.parent-avatar-field').find('.add_more_link');
    length = parent.find('input').length;
    if(text == 1)
    {
      $.ajax ({
        url:  '/svrs/file_field',
        data: {index: index, length: length },
        success: function(data)
        {
          parent.append(data);
          avatar_link.removeClass("hide");
        }
      });
    }
    else
    if(text == 0)
    {
      parent.html("");
      avatar_link.addClass("hide");
    }

  });


  $(".upload-radio-controls label input").change(function(e){
    text = $(this).val();
    avatar_link = $('.add_more_upload_link');
    parent = $('.parent-upload-field');
    length = parent.find("input").length;
    if(text == 1)
    {
      $.ajax ({
        url:  '/svrs/upload_field',
        data: {length: length },
        success: function(data)
        {
          console.log(data);
          parent.append(data);
          avatar_link.removeClass("hide");
        }
      });
    }
    else
    {
      parent.html("");
      avatar_link.addClass("hide");
    }
  });

  $(".add_more_upload_link").click(function(e){
    e.preventDefault();
    parent = $('.parent-upload-field');
    length = parent.find("input").length;
    $.ajax ({
        url:  '/svrs/upload_field',
        data: {length: length },
        success: function(data)
        {
          parent.append(data);
        }
    });
  });

  $(".edit_add_more_link").click(function(e){
    e.preventDefault();
    index = $(this).data("index");
    parent = $(this).parent().find('.avatar-fields').find('input').length;
    child = $(this).parent().find('.add-more-avatar');
    length = parent + child.find("input").length;
    $.ajax ({
        url:  '/svrs/file_field',
        data: {index: index, length: length },
        success: function(data)
        {
          child.append(data);
        }
    });
  });


  $(".radio-controls-edit label input[type=radio]").change(function(e){

    e.preventDefault();

    text = $(this).val();
    index = $(this).parent().data('index');

    contents_1 = $(this).parent().parent().find(".image-field");

    contents_2 = $(this).parent().parent().find(".add-more-avatar");

    avatar_link = $(this).parent().parent().find('.edit_add_more_link');

    length = 0;
    if(text == 1)
    {
      $.ajax ({
        url:  '/svrs/file_field',
        data: {index: index, length: length },
        success: function(data)
        {
          contents_2.append(data);
          avatar_link.removeClass("hide");
        }
      });
    }
  });

  $(".notification").click(function(){
    id = $(this).data("notification");
    count = $(".notification-count").text();
    $(this).remove();
    $.ajax ({
      url:  '/activities/update_activity',
      data: {id: id },
      success: function(data)
      {

        if(count>0)
          $(".notification-count").text(count-1);
      }
    });
  });

  $(".announcement-dismiss").click(function() {
    parent = $(this).parent();
    console.log(parent)
    $.ajax ({
      url:  '/announcements/update_user_status',
      success: function(data)
      {
        parent.remove();
      }
    });
  });

  $(".city-selector select").change(function(e){
    city_id = $(this).val();
    if(city_id){
      $(".area-portion").removeClass("hide");
      $('.shop-area-field').typeahead([
        {
          name: 'Areas',
          remote: {
            url: '/areas/search.json?keyword=',
            replace: function () {
              var q = '/areas/search.json?keyword='+ $(".shop-area-field").val();
              if ($(".city-selector select").val()){
                return q+=  "&id=" + encodeURIComponent($('.city-selector select').val());;
              }
              return q;
            }
          }
        }
      ]);
    }
    else
      $(".area-portion").addClass("hide");
  });

  $(".city-selector select").change();

});

$(document).on('click', '.svrs-table tbody a', function(){
  window.location=$(this).attr('src');
});



function loadBrandChart()
{
  var brand_chart = new cfx.Chart();
  brand_chart.setGallery(cfx.Gallery.Bar);
  PopulateBrandData(brand_chart);
  var titles = brand_chart.getTitles();
  var title = new cfx.TitleDockable();
  titles.add(title);
  brand_chart.getDataGrid().setVisible(true);
  brand_chart.getLegendBox().setVisible(false);
  brand_chart.create('brand_data_chart');

}

function loadCategoryChart()
{
  var category_chart = new cfx.Chart();
  category_chart.setGallery(cfx.Gallery.Bar);
  PopulateCategoryData(category_chart);
  var titles = category_chart.getTitles();
  var title = new cfx.TitleDockable();
  titles.add(title);
  category_chart.getDataGrid().setVisible(true);
  category_chart.getLegendBox().setVisible(false);
  category_chart.create('category_data_chart');
}

function PopulateBrandData(brand_chart)
{
  display_brand_data = $('.dispaly_brand_data').val().replace(/\s/g, "").split('~');
  sales_brand_data = $('.sale_brand_data').val().replace(/\s/g, "").split('~');
  var brands = [];
  for(i = 0; i < display_brand_data.length; i++) {
    temp = display_brand_data[i].trim().split("|");
    temp1 = sales_brand_data[i].trim().split("|");
    var item = {}
      item['Display'] = parseInt(temp[1]);
      item['Sales'] = parseInt(temp1[1]);
      item['Brands'] = temp[0];
    brands.push(item);
  }
  brand_chart.setDataSource(brands);
}



function PopulateCategoryData(category_chart)
{
  display_category_data = $('.dispaly_category_data').val().replace(/\s/g, "").split('~');
  sales_category_data = $('.sale_category_data').val().replace(/\s/g, "").split('~');
  var categories = [];
  for(i = 0; i < display_category_data.length; i++) {
    temp = display_category_data[i].trim().split("|");
    temp1 = sales_category_data[i].trim().split("|");
    var item = {}
      item['Display'] = parseInt(temp[1]);
      item['Sales'] = parseInt(temp1[1]);
      item['Categories'] = temp[0];
    categories.push(item);
  }
  category_chart.setDataSource(categories);
}

function showResponse(responseText, statusText, xhr, $form)  {
  $('.brand-chart-data').html('');
  $('.brand-chart-data').html(responseText);
}

function showCatResponse(responseText, statusText, xhr, $form)  {
  $('.category-chart-data').html('');
  $('.category-chart-data').html(responseText);
}