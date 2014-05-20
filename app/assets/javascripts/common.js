$('document').ready(function(){
    
  
  $('.category-tab').click();
  $('.brand-tab').click();
  $('.datepicker').datepicker();
  
  $('.jFax-chart').width($("#page-content").width());

  $('.tree-toggle').click(function () {
    $(this).parent().children('ul.tree').toggle(200);
  });

  $(".scroll-dealer").slimScroll({
    height: 'auto',
    size: '5px'
  });



  if($('.activities nav.pagination').length)
  {
    $('.activities-section').scroll(function(){
      domain = $('.activities-section').data("domain");
      var url = domain + $('.activities nav.pagination a[rel=next]').attr('href');
      if(url &&  $('.activities-section')[0].scrollHeight) 
      {   
        if ($('.activities-section').scrollTop() > -1) 
        {  
          $.ajax({
            url: url,
            success: function(data)
            {
              $('.activities-section').append(data);
              url = domain + $('.activities nav.pagination a[rel=next]').attr('href');
            }
          });
        }  
      } 
        
    });
    $('.activities-section').scroll();
  }


  if($('.pager_notification nav.pagination').length)
  {
    $('.notification-content').scroll(function(){
      domain = $('.notification-content').data("domain");
      var url = domain + $('.pager_notification nav.pagination a[rel=next]').attr('href');
      if(url &&  $('.notification-content')[0].scrollHeight) 
      {   
        if ($('.notification-content').scrollTop() > -1) 
        {  
          $.ajax({
            url: url,
            success: function(data)
            {
              $('.notification-content').append(data);
              url = domain + $('.pager_notification nav.pagination a[rel=next]').attr('href');
            }
          });
        }  
      } 
        
    });
    $('.notification-content').scroll();
  }

  if($('.subscribe nav.pagination').length)
  {
    $('.subscribe-activities').scroll(function(){
      domain = $('.subscribe-activities').data("domain");
      var url = domain + $('.subscribe nav.pagination a[rel=next]').attr('href');
      if(url &&  $('.subscribe-activities')[0].scrollHeight) 
      {   
        if ($('.subscribe-activities').scrollTop() > -1) 
        {  
          $.ajax({
            url: url,
            success: function(data)
            {
              $('.subscribe-activities').append(data);
              url = domain + $('.subscribe nav.pagination a[rel=next]').attr('href');
            }
          });
        }  
      } 
        
    });
    $('.subscribe-activities').scroll();
  }


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
    index = parent.find("input").length / 5
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
    id = $(this).val();
    area_content = $(".area-portion");
    $.ajax ({
      url:  '/shops/area_field',
      data: {id: id },
      success: function(data)
      {
        area_content.html(data);
      }
    });
  }); 

  $(".city-selector select").change();

});


function loadBrandChart()
{
  var brand_chart = new cfx.Chart();
  brand_chart.setGallery(cfx.Gallery.Bar);
  PopulateBrandData(brand_chart);
  var titles = brand_chart.getTitles();
  var title = new cfx.TitleDockable();
  titles.add(title);
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