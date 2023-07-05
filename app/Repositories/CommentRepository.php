<?php
namespace App\Repositories;

use App\Contracts\CommentContract;
use App\Models\Comment;
use App\Models\User;

class CommentRepository implements CommentContract
{
    protected $model;

    function __construct()
    {
        $this->model=new CommentRepository();
    }
    public function create($data)
    {
        return Comment::create($data);
    }

    public function destroy($id)
    {
        return Comment::destroy($id);
    }
}
?>
