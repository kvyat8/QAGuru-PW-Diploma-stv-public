import { ProfileService } from './profile.service'
import { MatchesService } from './matches.service'
import { PredictionService } from './prediction.service'
import { CommentService } from './comment.service'

export class ApiClient {
  constructor() {
    this.profileService = new ProfileService()
    this.matchService = new MatchesService()
    this.predictionService = new PredictionService()
    this.commentService = new CommentService()
  }
}
