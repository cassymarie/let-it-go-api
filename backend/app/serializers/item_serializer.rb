class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :damage, :base_imageUrl, :splat_imageUrl
end
