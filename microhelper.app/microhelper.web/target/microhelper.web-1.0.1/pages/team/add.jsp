<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
  <div ng-controller="companyAddCnt">
    <!-- Main content -->
      <form name="formContent" ng-submit="doSave()" enctype="multipart/form-data">
          <section class="content">
          <!-- /.row -->
          <div class="row">
            <div class="col-xs-12">
              <div class="box">
                <div class="box-header">
                    <div class="col-xs-12">
                        <h2 class="page-header">
                            <i class="fa fa-globe"></i> 人才详情
                            <small class="pull-right">&nbsp;</small>
                        </h2>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body search_form detailForm no-padding">
                        <div class="col-xs-4">
                            <div class="col-xs-4 no-padding">
                                <label>姓名:</label>
                            </div>
                            <div class="col-xs-8 no-padding">
                                <input name="name" class="form-control" ng-model="applicant.personName" maxLength="25" required>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="col-xs-4 no-padding">
                                <label>职业:</label>
                            </div>
                            <div class="col-xs-8 no-padding">
                                <span style="position:absolute;overflow:hidden;width:100%;height:34px;">
									<select class="form-control" ng-model="applicant.profession"  style="width:100%;">
									    <option ng-repeat="x in professionData" value="{{x.optKey}}">{{x.optValue}}</option>
									</select>
								</span>
								<span class="form-control" style="position:absolute;width:90%;height:34px;">
								    <input class="form-control" type="text"
								     ng-model="applicant.profession" style="width:100%;height:100%;border:0pt;" 
								     maxLength="25" required>
								</span>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="col-xs-4 no-padding">
                                <label>工作年限:</label>
                            </div>
                            <div class="col-xs-8 no-padding">
                                <input type="number" name="workYear" class="form-control" ng-model="applicant.workYear"
                                 min="1" max="100" maxLength="3" pattern="^\d{0,3}$">
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="col-xs-4 no-padding">
                                <label>性别:</label>
                            </div>
                            <div class="col-xs-8 no-padding">
                                <select class="form-control" ng-model="applicant.gender" required>
                                    <option ng-repeat="x in genderData" value="{{x.optKey}}">{{x.optValue}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="col-xs-4 no-padding">
                                <label>期望薪资:</label>
                            </div>
                            <div class="col-xs-4 no-padding">
                                <input type="number" name="salary" style="width:100px;" class="form-control" ng-model="applicant.salary" 
                                required min="0" max="1000000" maxLength="7" patten="^\d[0]{2}$">
                            </div>
                            <div class="col-xs-4 no-padding">
                                ({{applicant.salary | myFormatSalary}}元)
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="col-xs-4 no-padding">
                                <label>居住地:</label>
                            </div>
                            <div class="col-xs-8 no-padding">
                                <span style="position:absolute;overflow:hidden;width:100%;height:34px;">
                                    <select class="form-control" ng-model="applicant.address"  style="width:100%;">
                                        <option ng-repeat="x in addressData" value="{{x.optKey}}">{{x.optValue}}</option>
                                    </select>
                                </span>
                                <span class="form-control" style="position:absolute;width:90%;height:34px;">
                                    <input class="form-control" type="text" maxLength="25"
                                     ng-model="applicant.address" style="width:100%;height:100%;border:0pt;" required>
                                </span>
                                <input name="address" class="form-control"  maxLength="25" ng-model="applicant.address" required>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="col-xs-4 no-padding">
                                <label>行业:</label>
                            </div>
                            <div class="col-xs-8 no-padding">
                                <span style="position:absolute;overflow:hidden;width:100%;height:34px;">
                                    <select class="form-control" ng-model="applicant.business"  style="width:100%;">
                                        <option ng-repeat="x in businessData" value="{{x.optKey}}">{{x.optValue}}</option>
                                    </select>
                                </span>
                                <span class="form-control" style="position:absolute;width:90%;height:34px;">
                                    <input class="form-control" type="text"
                                     ng-model="applicant.business" style="width:100%;height:100%;border:0pt;"
                                      required maxLength="25" >
                                </span>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="col-xs-4 no-padding">
                                <label>电话:</label>
                            </div>
                            <div class="col-xs-8 no-padding">
                                <input name="telphone" required type="tel" pattern=^1[34578]\d{9}$ class="form-control"
                                 ng-model="applicant.telphone">
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="col-xs-4 no-padding">
                                <label>状态:</label>
                            </div>
                            <div class="col-xs-8 no-padding">
                                <select class="form-control" ng-model="applicant.personStatus" required>
                                    <option ng-repeat="x in statusListData" value="{{x.optKey}}">{{x.optValue}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="col-xs-4 no-padding">
                                <label>评分:</label>
                            </div>
                            <div class="col-xs-8 no-padding">
                                <input type="number" name="score" class="form-control" 
                                ng-model="applicant.score" min="0" max="100" pattern="^\d{0,3}$" maxLenght="3">
                            </div>
                        </div>
                        <div class="col-xs-8">
                            <div class="col-xs-2 no-padding">
                                <label style="text-align:right;">简历:</label>
                            </div>
                            <div class="col-xs-10 no-padding">
                                <div class="wedoUploadFile">
                                    <div class="col-xs-4 no-padding">
                                      <input name="resumeName" class="form-control" maxLength="20" 
                                        style="width:150px" ng-model="applicant.resumeName" readonly="readonly">
                                    </div>
                                    <div class="col-xs-2 no-padding">
	                                      &nbsp;&nbsp;
	                                      <a href="javascript:void(0);" name="file" width="auto">
	                                           <button type="button" class="btn btn-success btn-s" ng-disabled="item.isReady || item.isUploading || item.isSuccess">
	                                               <span class="glyphicon glyphicon-upload"></span>上传
	                                           </button>
	                                           <input type="file" name="key" style="width:70px;" nv-file-select="" uploader="uploader" />
	                                       </a>
                                    </div>
                                    <div class="col-xs-2 no-padding">
                                        <button type="button" class="btn btn-danger btn-s" ng-click="removeFileResume()" ng-disabled="item.isReady || item.isUploading || item.isSuccess">
                                            <span class="glyphicon glyphicon-trash"></span>删除
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <!-- /.box-body -->
              </div>
              <!-- /.box -->
            </div>
          </div>
        </section>
          <section class="content">
              <!-- /.row -->
              <div class="row">
                  <div class="col-xs-12">
                      <div class="box">
                          <div class="box-header">
                              <div class="col-xs-12">
                                  <h2 class="page-header">
                                      <i class="fa fa-globe"></i> 备注
                                      <small class="pull-right">&nbsp;</small>
                                  </h2>
                              </div>
                          </div>
                          <!-- /.box-header -->
                          <div class="box-body search_form no-padding">
                              <div class="col-xs-12 pd-b-m">
                                  <textarea class="form-control" rows="3" ng-model="applicant.personDesc" placeholder="Enter ..."></textarea>
                              </div>
                          </div>
                          <!-- /.box-body -->
                      </div>
                      <!-- /.box -->
                  </div>
              </div>
          </section>
          <section class="content">
              <button type="submit" class="btn btn-info btn-sm">保存</button>
              <button ng-click="doBack()" type="button" class="btn btn-info btn-sm" >返回</button>
          </section>
      </form>
    <!-- /.content -->
  </div>
