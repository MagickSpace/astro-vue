import { Image } from './Image'
import { Language } from './Language'

export class Product {
	language = def.manyHasOne(Language, 'products').notNull()
	name = def.stringColumn().notNull()
	description = def.stringColumn()
	price = def.doubleColumn().notNull()
	productImage = def.manyHasOne(Image).setNullOnDelete()
}
