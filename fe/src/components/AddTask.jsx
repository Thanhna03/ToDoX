import React from 'react'
import { Card } from './ui/card'
import { Input } from './ui/input'

const AddTask = () => {
  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className='flex flex-col sm:flex-row gap-3'>
        <Input
          type="text"
          placeholder="Việc cần làm"
          className="h-12 text-base bg-slate-50  sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20"
        />
      </div>
    </Card>
  )
}

export default AddTask
