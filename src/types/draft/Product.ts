import { SchemaDefinition as def } from '@contember/schema-definition'

import { Language } from './Language'
import { Image } from './Image'

export class Product {
	language = def.manyHasOne(Language, 'products').notNull()
	name = def.stringColumn().notNull()
	description = def.stringColumn()
	price = def.doubleColumn().notNull()
	productImage = def.manyHasOne(Image).setNullOnDelete()
}
