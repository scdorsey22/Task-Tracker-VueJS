class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :text
      t.string :date
      t.boolean :reminder

      t.timestamps
    end
  end
end
