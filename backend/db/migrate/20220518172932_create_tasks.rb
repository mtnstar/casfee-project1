class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.integer :importance
      t.date :due_at
      t.text :description
      t.boolean :finished, default: false

      t.timestamps
    end
  end
end
