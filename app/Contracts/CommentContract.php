<?php
namespace App\Contracts;

interface CommentContract
{
    public function create($data);
    public function destroy($id);
}
?>
