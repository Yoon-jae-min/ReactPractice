import React from 'react';
import Comment from './Comment';

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment} url={comment.url}/>
                );
            })}
        </div>
        
    )
}

export default CommentList;


const comments = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다.",
        url: "https://cdn.crowdpic.net/detail-thumb/thumb_d_2F583E5543F7E19139C6FCFFBF9607A6.jpg"
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~",
        url: "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11288734&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wMjIwX251cmltZWRpYV8yMDE1MTIwMw==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006"
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워 보고 싶어요!!",
        url: "https://pds.skyedaily.com/top_image/202303/186417_p.jpg"
    }
]