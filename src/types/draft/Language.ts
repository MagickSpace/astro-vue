import { SchemaDefinition as def } from '@contember/schema-definition'

import { Article } from './Article'
import { Product } from './Product'
import { Service } from '../Services'
import { SupportResource } from './SupportResource'
import { Promotion } from '../Promotion'
import { MediaItem } from './MediaItem'
import { User } from './User'
import { Post } from './Post'
import { Comment } from '../Comment'
import { Statistic } from '../Statistic'
import { FinancialInfo } from '../FinancialInfo'
import { Portfolio } from './Portfolio'

@def.Unique('code')
export class Language {
	articles = def.oneHasMany(Article, 'language')
	products = def.oneHasMany(Product, 'language')
	services = def.oneHasMany(Service, 'language')
	supportResources = def.oneHasMany(SupportResource, 'language')
	promotions = def.oneHasMany(Promotion, 'language')
	mediaItems = def.oneHasMany(MediaItem, 'language')
	users = def.oneHasMany(User, 'language')
	posts = def.oneHasMany(Post, 'language')
	comments = def.oneHasMany(Comment, 'language')
	statistics = def.oneHasMany(Statistic, 'language')
	financialInfos = def.oneHasMany(FinancialInfo, 'language')
	code = def.stringColumn().notNull()
	portfolios = def.oneHasMany(Portfolio, 'language')
}
