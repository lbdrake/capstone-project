class ChangeColumnAuthorIdinProjects < ActiveRecord::Migration
  def change
    change_column :projects, :author_id, 'integer USING CAST(author_id AS integer)'
  end
end
