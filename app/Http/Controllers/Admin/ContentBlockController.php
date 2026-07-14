<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContentBlock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContentBlockController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/ContentBlocks/Index', [
            'blocks' => ContentBlock::orderBy('group')->orderBy('label')->get()->map(fn ($block) => [
                'id'    => $block->uuid,
                'key'   => $block->key,
                'label' => $block->label,
                'value' => $block->value,
                'group' => $block->group,
            ]),
        ]);
    }

    public function edit(ContentBlock $contentBlock)
    {
        return Inertia::render('Admin/ContentBlocks/Edit', [
            'block' => [
                'id'    => $contentBlock->uuid,
                'key'   => $contentBlock->key,
                'label' => $contentBlock->label,
                'value' => $contentBlock->value,
                'group' => $contentBlock->group,
            ],
        ]);
    }

    public function update(Request $request, ContentBlock $contentBlock)
    {
        $validated = $request->validate([
            'label' => ['required', 'string', 'max:255'],
            'value' => ['nullable', 'string'],
            'group' => ['required', 'string', 'max:255'],
        ]);

        $contentBlock->update($validated);

        return redirect()->route('admin.content-blocks.index')->with('success', 'Content block updated.');
    }
}
