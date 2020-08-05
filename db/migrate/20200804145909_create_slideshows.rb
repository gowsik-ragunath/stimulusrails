class CreateSlideshows < ActiveRecord::Migration[6.0]
  def change
    create_table :slideshows do |t|

      t.timestamps
    end
  end
end
