/**
 * @api {get} /users/names/check user_name_check
 * @apiName user_name_check
 * @apiGroup auth
 *
 * @apiParam {String} user_name 중복 체크 하고자 하는 닉네임
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 {
     "available": true
 }
 */

/**
 * @api {post} /users auth_register
 * @apiName auth_register
 * @apiGroup auth
 *
 * @apiParamExample {json} Request-Example:
 {
     "token": "asdf1234",
     "user_name": "다이어트짱"
 }
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 {
     "token": "1q2w3e4r"
 }
 */

/**
 * @api {get} /users auth_login
 * @apiName auth_login
 * @apiGroup auth
 *
 * @apiParam {String} token Facebook 유저 id
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 {
     "token": "1q2w3e4r"
 }
 */

/**
 * @api {post} /feeds feed_write
 * @apiName feed_write
 * @apiGroup feed
 *
 * @apiParamExample {json} Request-Example:
 {
     "content": "병아리콩 맛있어><* 여러분토 병아리콩으로 새로운 음식 만들어서 먹어보세요!",
     "calorie": 400,
     "tags": [
         "병아리콩",
         "샐러드",
         "토마토",
         "양상추"
     ],
     "img_url": "asdf.jpg"
 }
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 {
     "feed_id": 123,
     "user_profile": "asdf.jpg",
     "user_name": "다이어트짱",
     "content": "병아리콩 맛있어><* 여러분토 병아리콩으로 새로운 음식 만들어서 먹어보세요!",
     "calorie": 400,
     "tags": [
         "병아리콩",
         "샐러드",
         "토마토",
         "양상추"
     ],
     "img_url": "asdf.jpg"
 }
 */

/**
 * @api {get} /feeds feed_list
 * @apiName feed_list
 * @apiGroup feed
 *
 * @apiParam {Number} page 현재 페이지 (0 부터 시작)
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 [
     {
         "feed_id": 123,
         "user_profile": "asdf.jpg",
         "user_name": "다이어트짱",
         "content": "병아리콩 맛있어><* 여러분토 병아리콩으로 새로운 음식 만들어서 먹어보세요!",
         "calorie": 400,
         "tags": [
             "병아리콩",
             "샐러드",
             "토마토",
             "양상추"
         ],
         "img_url": "asdf.jpg"
     }
 ]
 */

/**
 * @api {get} /feeds/:feed_id feed_detail
 * @apiName feed_detail
 * @apiGroup feed
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 {
     "feed_id": 123,
     "user_profile": "asdf.jpg",
     "user_name": "다이어트짱",
     "content": "병아리콩 맛있어><* 여러분토 병아리콩으로 새로운 음식 만들어서 먹어보세요!",
     "calorie": 400,
     "tags": [
         "병아리콩",
         "샐러드",
         "토마토",
         "양상추"
     ],
     "img_url": "asdf.jpg"
 }
 */

/**
 * @api {put} /feeds feed_modify
 * @apiName feed_modify
 * @apiGroup feed
 *
 * @apiParamExample {json} Request-Example:
 {
     "feed_id": 123,
     "content": "병아리콩 맛있어><* 여러분토 병아리콩으로 새로운 음식 만들어서 먹어보세요!",
     "calorie": 400,
     "tags": [
         "병아리콩",
         "샐러드",
         "토마토",
         "양상추"
     ],
     "img_url": "asdf.jpg"
 }
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 204 No Content
 */

/**
 * @api {delete} /feeds/:feed_id feed_delete
 * @apiName feed_delete
 * @apiGroup feed
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 204 No Content
 */

/**
 * @api {get} /feeds/:feed_id/like feed_is_like
 * @apiName feed_is_like
 * @apiGroup feed
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 {
     "is_like": true
 }
 */

/**
 * @api {put} /feeds/:feed_id/like feed_like
 * @apiName feed_like
 * @apiGroup feed
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 204 No Content
 */

/**
 * @api {delete} /feeds/:feed_id/like feed_unlike
 * @apiName feed_unlike
 * @apiGroup feed
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 204 No Content
 */

/**
 * @api {post} /images/upload/feed feed_image_upload
 * @apiName feed_image_upload
 * @apiGroup feed
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 {
     "img_url": "asdf.jpg"
 }
 */

/**
 * @api {get} /search search
 * @apiName search
 * @apiGroup search
 *
 * @apiParam {Number} start_kalorie 범위 시작 칼로리 (default = 0)
 * @apiParam {Number} end_kalorie 범위 끝 칼로리 (default = 700)
 * @apiParam {String} tag 태그 (default = None)
 * @apiParam {String} user_name 닉네임 (default = None)
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 [
     {
         "feed_id": 123,
         "user_profile": "asdf.jpg",
         "user_name": "다이어트짱",
         "content": "병아리콩 맛있어><* 여러분토 병아리콩으로 새로운 음식 만들어서 먹어보세요!",
         "calorie": 400,
         "tags": [
             "병아리콩",
             "샐러드",
             "토마토",
             "양상추"
         ],
         "img_url": "asdf.jpg"
     }
 ]
 */

/**
 * @api {get} /search/rcmd/tags rcmd_tag_list
 * @apiName rcmd_tag_list
 * @apiGroup search
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 [
     "병아리콩",
     "샐러드",
     "토마토",
     "양상추"
 ]
 */

/**
 * @api {get} /search/rcmd/users rcmd_user_list
 * @apiName rcmd_user_list
 * @apiGroup search
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 [
     "다이어트짱",
     "다이아트굳",
     "다이어트킹"
 ]
 */

/**
 * @api {get} /users/:user_name user_detail
 * @apiName user_detail
 * @apiGroup user
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 {
     "user_profile": "asdf.jpg",
     "user_name": "다이어트짱",
     "feed_num": 159,
     "follower_num": 159,
     "following_num": 159,
     "user_msg": "Healthy food is my life ♥\nBE MY SELF with healthy life"
 }
 */

/**
 * @api {put} /users/:user_name user_modify
 * @apiName user_modify
 * @apiGroup user
 *
 * @apiParamExample {json} Request-Example:
 {
     "user_profile": "asdf.jpg",
     "user_name": "다이어트짱",
     "feed_num": 159,
     "follower_num": 159,
     "following_num": 159,
     "user_msg": "Healthy food is my life ♥\nBE MY SELF with healthy life"
 }
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 204 No Content
 */

/**
 * @api {get} /users/:user_name/follow user_is_follow
 * @apiName user_is_follow
 * @apiGroup user
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 {
     "is_follow": true
 }
 */

/**
 * @api {put} /users/:user_name/follow user_follow
 * @apiName user_follow
 * @apiGroup user
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 204 No Content
 */

/**
 * @api {delete} /users/:user_name/follow user_unfollow
 * @apiName user_unfollow
 * @apiGroup user
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 204 No Content
 */

/**
 * @api {get} /users/:user_name/feeds user_feeds
 * @apiName user_feeds
 * @apiGroup user
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 [
     {
         "feed_id": 123,
         "user_profile": "asdf.jpg",
         "user_name": "다이어트짱",
         "content": "병아리콩 맛있어><* 여러분토 병아리콩으로 새로운 음식 만들어서 먹어보세요!",
         "calorie": 400,
         "tags": [
             "병아리콩",
             "샐러드",
             "토마토",
             "양상추"
         ],
         "img_url": "asdf.jpg"
     }
 ]
 */

/**
 * @api {post} /images/upload/user user_profile_upload
 * @apiName user_profile_upload
 * @apiGroup user
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 {
     "img_url": "asdf.jpg"
 }
 */
