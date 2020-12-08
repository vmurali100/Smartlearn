import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PoAdminComponent } from './po-admin/po-admin.component';
import { CommodityCodeComponent } from './configure-masterData/commodity-code/commodity-code.component';
import { AddQuizComponent } from './configure-masterData/add-quiz/add-quiz.component';
import { WorkGroupComponent } from './configure-masterData/work-group/work-group.component';
import { RulesComponent } from './configure-masterData/rules/rules.component';
import { SearchWorkflowComponent } from './configure-masterData/work-flow/search-workflow/search-workflow.component';
import { ViewWorkflowDetailsComponent } from './configure-masterData/work-flow/view-workflow-details/view-workflow-details.component';
import { CreateWorkflowComponent } from './configure-masterData/work-flow/create-workflow/create-workflow.component';
import { ResultComponent } from './configure-masterData/result/result.component';

const routes = [{
  path: '',
  data: {
    title: 'Admin'
  },
  children: [
    {
      path: 'dashboard',
      component: PoAdminComponent,
      data: {
        title: 'PO Admin',
      }
    },
    {
      path: 'configure/commoditycode',
      component: CommodityCodeComponent,
      data: {
        title: 'Configure Commodity Code',
      }
    }, {
      path: 'configure/add-quiz',
      component: AddQuizComponent,
      data: {
        title: 'Configure User',
      }
    },
    {
      path: 'configure/result-user',
      component: ResultComponent,
      data: {
        title: 'Configure User',
      }
    }, 
    {
      path: 'configure/workgroup',
      component: WorkGroupComponent,
      data: {
        title: 'Configure Work Group',
      }
    }, {
      path: 'configure/workflow',
      component: RulesComponent,
      data: {
        title: 'Configure Work Flow',
      }
    }, {
      path: 'configure/search-workflow',
      component: SearchWorkflowComponent,
      data: {
        title: 'Search Work Flow',
      }
    },
    {
      path: 'configure/view-workflow',
      component: ViewWorkflowDetailsComponent,
      data: {
        title: 'View Work Flow Detail',
      }
    },
    {
      path: 'configure/create-workflow',
      component: CreateWorkflowComponent,
      data: {
        title: 'Create Work Flow',
      }
    }
  ]
}];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule { }
