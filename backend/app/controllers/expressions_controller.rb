class ExpressionsController < ApplicationController
    def index
        expressions = Expression.all
        render json: expressions.to_json(
            except: [:created_at, :updated_at])
    end
end