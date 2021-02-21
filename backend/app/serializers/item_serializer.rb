class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :count, :name, :damage, :base_imageUrl, :throw_imageUrl, :splat_imageUrl,:base_transition, :throw_transition, :splat_transition
end
