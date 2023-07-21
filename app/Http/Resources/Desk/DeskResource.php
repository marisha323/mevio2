<?php

namespace App\Http\Resources\Desk;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Date;

class DeskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'deskName' => $request->deskName,
            'isPublic' => $request->isPublic,
            'themeId' => $request->themeId,
        ];
    }
}
