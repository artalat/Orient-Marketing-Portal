class Task < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :assigned_by, :assigned_to, :comment, :shop_id, :status, :important

  has_one :shop
end