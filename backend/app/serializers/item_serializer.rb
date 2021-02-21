class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :damage, :base_imageUrl, :base_imageUrl,:splat_imageUrl,:base_transition, :throw_transition, :splat_transition
end
