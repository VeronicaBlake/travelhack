export default class Image {
  constructor(data) {
    this.title = data.title
    this.imgurl = data.imgurl
    this.id = data.id
    this.author = null
    this.comments = []
  }

  get Template() {
    return `
      <div class="image-container mb-5">
            <div class="image-card p-4 bg-white">
                <img src="${this.imgurl}" class="post-image" alt="">
                <div class="image-card-content py-3">
                    
                    <!-- user/title/likes -->
                    <div class="image-card-header d-flex justify-content-between text-success">
                        <i class="fas fa-user fa-4x"></i>
                        <h2 class="image-card-title" id="image-card-title">${this.title}</h3>
                        <div class="heart-info d-flex">
                          <div class="heart-content>
                            <div class="heart-count display-4" id="heart-count">13</div>
                            <i class="far fa-heart fa-3x"></i>
                          </div>
                          <i class="fas fa-trash" onclick="app.imagesController.deleteImage('${this.id}')"></i>
                        </div>
                    </div>

                    <!-- add comment -->
                    <div class="image-card-footer d-flex justify-content-between pt-4 pb-3">
                    <form class="form-inline d-flex justify-content-center" onsubmit="app.imagesController.addComment()">
                        <div class="form-group mb-2">
                            <label for="commentText" class=""></label>
                            <input type="text" class="bg-light mr-2 border-0 rounded p-2 shadow" id="commentText"
                                name="commentText" placeholder="Comment...">
                        </div>
                        <button type="submit" class="btn btn-dark mb-2 shadow ml-2"><i class="fas fa-plus fa-2x"></i></button>
                    </form>

                    <button class="btn btn-large btn-success" onclick="app.imagesController.drawComments(${this.id})">SHOW COMMENTS</button>
                    </div>
                </div>
                <!-- dynamically generated comments -->
                <div class="image-comments" id="${this.id}"></div>
            </div>
        </div>
    `
  }
}
