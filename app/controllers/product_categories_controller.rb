class ProductCategoriesController < ApplicationController
  # GET /product_categories
  # GET /product_categories.json
  def index
    authorize! :read, ProductCategory
    params[:page] = params[:page].blank? ? 1 : params[:page]
    @product_categories = ProductCategory.page(params[:page]).per(10)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @product_categories }
    end
  end

  # GET /product_categories/1
  # GET /product_categories/1.json
  def show
    authorize! :read, ProductCategory
    @product_category = ProductCategory.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @product_category }
    end
  end

  # GET /product_categories/new
  # GET /product_categories/new.json
  def new
    authorize! :create, ProductCategory
    @product_category = ProductCategory.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @product_category }
    end
  end

  # GET /product_categories/1/edit
  def edit
    authorize! :update, ProductCategory
    @product_category = ProductCategory.find(params[:id])
  end

  # POST /product_categories
  # POST /product_categories.json
  def create
    @product_category = ProductCategory.new(params[:product_category])

    respond_to do |format|
      if @product_category.save
        @product_category.create_activity :create, owner: current_user
        format.html { redirect_to @product_category, notice: 'Product category was successfully created.' }
        format.json { render json: @product_category, status: :created, location: @product_category }
      else
        format.html { render action: "new" }
        format.json { render json: @product_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /product_categories/1
  # PUT /product_categories/1.json
  def update
    @product_category = ProductCategory.find(params[:id])

    respond_to do |format|
      if @product_category.update_attributes(params[:product_category])
        @product_category.create_activity :update, owner: current_user
        format.html { redirect_to @product_category, notice: 'Product category was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @product_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /product_categories/1
  # DELETE /product_categories/1.json
  def destroy
    authorize! :destroy, ProductCategory
    @product_category = ProductCategory.find(params[:id])
    @product_category.create_activity :destroy, owner: current_user
    @product_category.destroy

    respond_to do |format|
      format.html { redirect_to product_categories_url }
      format.json { head :no_content }
    end
  end
end
