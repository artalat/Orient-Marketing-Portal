require 'test_helper'

class ShopsControllerTest < ActionController::TestCase
  setup do
    @shop = shops(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:shops)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create shop" do
    assert_difference('Shop.count') do
      post :create, shop: { address: @shop.address, dealer: @shop.dealer, dealer_name: @shop.dealer_name, email: @shop.email, location_id: @shop.location_id, phone: @shop.phone, shop_category_id: @shop.shop_category_id, website: @shop.website }
    end

    assert_redirected_to shop_path(assigns(:shop))
  end

  test "should show shop" do
    get :show, id: @shop
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @shop
    assert_response :success
  end

  test "should update shop" do
    put :update, id: @shop, shop: { address: @shop.address, dealer: @shop.dealer, dealer_name: @shop.dealer_name, email: @shop.email, location_id: @shop.location_id, phone: @shop.phone, shop_category_id: @shop.shop_category_id, website: @shop.website }
    assert_redirected_to shop_path(assigns(:shop))
  end

  test "should destroy shop" do
    assert_difference('Shop.count', -1) do
      delete :destroy, id: @shop
    end

    assert_redirected_to shops_path
  end
end
