import { Comment } from '../Comment'
import { FinancialInfo } from '../FinancialInfo'
import { Promotion } from '../Promotion'
import { Service } from '../Services'
import { Statistic } from '../Statistic'
import { Article } from './Article'
import { MediaItem } from './MediaItem'
import { Portfolio } from './Portfolio'
import { Post } from './Post'
import { Product } from './Product'
import { SupportResource } from './SupportResource'
import { User } from './User'

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
