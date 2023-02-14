import React from "react";

function PostIt(){
    return(
        <>
        <div className="about-header">
        <h1>POST-IT</h1>
    </div>

    <div className="about-text-area">
        <center>
            <article>
                <small>
                    <b>
                    Do you have any vinyls that you've loved for years but need to get rid
                    of to make room for your new future collections? Or have you been looking
                    for a special vinyl for awhile now and just can't seem to find and get your hands
                    on it? We have recently added a new tool to fix both of these prolbems. It's called... <h3><u>'POST-IT'!</u></h3>.
                    It's pretty simple. Below add the name, artist, front-cover image, back-cover image, the price
                    of the vinyl you want to post and sell. We take care of the rest for you! Once a music lover buys your vinyl,
                    you get your cut directley into your bank account. Not only can you sell and make a pretty dollar with our new
                    implemented tool, but it's an opportunity for you to track down musical treasures you've been waiting so long to own!
                    </b>
                </small>
            </article>
        </center>
    </div>
    <hr className="underline-add-vinyl-text"/>
    </>
    )
}

export default PostIt