class Area < ActiveRecord::Base
  include PublicActivity::Common	
  has_many :locations

  attr_accessible :name

  validates :name, :length => {:maximum => 30}, :presence => true
end