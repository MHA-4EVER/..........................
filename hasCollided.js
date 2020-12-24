function hasCollided(lbullet, lwall){

bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge >= wallLeftEdge){
    return true;
}
    return false;
}