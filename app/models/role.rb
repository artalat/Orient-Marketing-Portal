class Role < ActiveRecord::Base

  has_and_belongs_to_many :users
  has_and_belongs_to_many :user_types

  attr_accessible :action, :entity, :name, :notes, :symbol

  @@config = {}

  before_save :update_symbol

  def self.get (symbol)
    Role.find_by_symbol symbol.to_s
  end

  def update_symbol
    sym = self.name.to_s.downcase.strip.gsub(/[\s\t\n\r]/, '_').gsub(/\W/, '')
    sym = sym.gsub(/__/, '_') while sym =~ /__/
    self.symbol = sym
  end

  def self.make (sym)
    Role.create :name => sym.to_s.titleize
  end

  def self.actions
    Role.load_config :actions
  end

  private

  def self.load_config (what)
    if @@config[what].nil?
      config = YAML::load(File.open(File.join(Rails.root, 'config', 'roles.yml')))
      config.each do |key, val|
        @@config[key.to_s.to_sym] = val.symbolize_keys
      end
    end
    @@config[what]
  end

end
